package main

import (
	"crypto/tls"
	"crypto/x509"
	"encoding/pem"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/elazarl/goproxy"
)

type DiskCertStore struct {
	dir string
	mu  sync.Mutex
	mem map[string]*tls.Certificate
}

func NewDiskCertStore(dir string) *DiskCertStore {
	_ = os.MkdirAll(dir, 0700)
	return &DiskCertStore{dir: dir, mem: map[string]*tls.Certificate{}}
}

// Fetch implements goproxy.CertStorage. :contentReference[oaicite:2]{index=2}
func (s *DiskCertStore) Fetch(hostname string, gen func() (*tls.Certificate, error)) (*tls.Certificate, error) {
	host := normalizeHost(hostname)

	s.mu.Lock()
	defer s.mu.Unlock()

	if c := s.mem[host]; c != nil {
		return c, nil
	}

	certPath := filepath.Join(s.dir, host+".crt.pem")
	keyPath := filepath.Join(s.dir, host+".key.pem")

	// Try load from disk
	if certPEM, err1 := os.ReadFile(certPath); err1 == nil {
		if keyPEM, err2 := os.ReadFile(keyPath); err2 == nil {
			pair, err := tls.X509KeyPair(certPEM, keyPEM)
			if err == nil {
				s.mem[host] = &pair
				return &pair, nil
			}
		}
	}

	// Generate and persist
	c, err := gen()
	if err != nil {
		return nil, err
	}
	if c == nil {
		return nil, errors.New("gen() returned nil certificate")
	}

	certPEM, keyPEM, err := encodeTLSCertToPEM(c)
	if err != nil {
		return nil, err
	}

	if err := atomicWriteFile(certPath, certPEM, 0600); err != nil {
		return nil, err
	}
	if err := atomicWriteFile(keyPath, keyPEM, 0600); err != nil {
		return nil, err
	}

	s.mem[host] = c
	return c, nil
}

func normalizeHost(h string) string {
	// goproxy host strings often include port (e.g. "example.com:443").
	// Keep it per-host, not per-port.
	if i := strings.LastIndex(h, ":"); i > -1 && !strings.Contains(h[i+1:], "]") {
		h = h[:i]
	}
	h = strings.Trim(h, "[]")

	// filename-safe
	b := strings.Builder{}
	for _, r := range h {
		switch {
		case r >= 'a' && r <= 'z':
			b.WriteRune(r)
		case r >= 'A' && r <= 'Z':
			b.WriteRune(r)
		case r >= '0' && r <= '9':
			b.WriteRune(r)
		case r == '.' || r == '-' || r == '_':
			b.WriteRune(r)
		default:
			b.WriteByte('_')
		}
	}
	if b.Len() == 0 {
		return "host"
	}
	return b.String()
}

func encodeTLSCertToPEM(c *tls.Certificate) ([]byte, []byte, error) {
	var certOut []byte
	for _, der := range c.Certificate {
		certOut = append(certOut, pem.EncodeToMemory(&pem.Block{Type: "CERTIFICATE", Bytes: der})...)
	}

	// Works for RSA/ECDSA/Ed25519 keys.
	keyDER, err := x509.MarshalPKCS8PrivateKey(c.PrivateKey)
	if err != nil {
		return nil, nil, err
	}
	keyOut := pem.EncodeToMemory(&pem.Block{Type: "PRIVATE KEY", Bytes: keyDER})

	return certOut, keyOut, nil
}

func atomicWriteFile(path string, data []byte, perm os.FileMode) error {
	dir := filepath.Dir(path)
	tmp := filepath.Join(dir, fmt.Sprintf(".%s.tmp", filepath.Base(path)))

	if err := os.WriteFile(tmp, data, perm); err != nil {
		return err
	}
	return os.Rename(tmp, path)
}

// Compile-time assertion that DiskCertStore satisfies goproxy.CertStorage. :contentReference[oaicite:3]{index=3}
var _ goproxy.CertStorage = (*DiskCertStore)(nil)
