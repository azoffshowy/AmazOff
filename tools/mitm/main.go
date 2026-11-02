package main

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"syscall"
	"time"

	"github.com/elazarl/goproxy"
)

// webOS 11.x: the stock player-bundle host is transparently redirected to the
// local nginx (serving the patched player bundle) by hijacking its CONNECT;
// every other host is tunnelled through untouched. The app talks real TLS to
// nginx, so no MITM cert handling is involved.
const bundleHost = "cloudfront.xp-assets.aiv-cdn.net"

func main() {
	if os.Getenv("DAEMONIZED") == "" {
		attr := &os.ProcAttr{
			Env:   append(os.Environ(), "DAEMONIZED=1"),
			Files: []*os.File{nil, nil, nil},
		}
		p, err := os.StartProcess(os.Args[0], os.Args, attr)
		if err != nil {
			fmt.Fprintf(os.Stderr, "[ERROR] daemonize failed: %v\n", err)
			os.Exit(1)
		}
		_ = p
		os.Exit(0)
	}
	logDir := "."

	if len(os.Args) > 1 && os.Args[1] != "" {
		logDir = os.Args[1]
	}

	if err := os.MkdirAll(logDir, 0755); err != nil {
		fatalf("cannot create log dir %q: %v", logDir, err)
	}

	redirect := os.Getenv("REDIRECT_TARGET")
	if redirect == "" {
		redirect = "127.0.0.1:443"
	}

	pidFile := filepath.Join(logDir, "mitm.pid")
	pid := os.Getpid()

	// refuse to start if pidfile exists and process is alive
	if data, err := os.ReadFile(pidFile); err == nil {
		var oldPid int
		if _, err := fmt.Sscanf(string(data), "%d", &oldPid); err == nil {
			if err := syscall.Kill(oldPid, 0); err == nil {
				fatalf("mitm start aborted: already running with pid %d", oldPid)
			}
		}
	}

	// write pidfile
	if err := os.WriteFile(pidFile, []byte(fmt.Sprintf("%d\n", pid)), 0644); err != nil {
		fatalf("cannot write pid file: %v", err)
	}
	defer os.Remove(pidFile)

	go func() {
		// The redirect proxy is the runtime interception on webOS 11.x and
		// must not expire; keep the time limit for plain debug MITM only.
		if os.Getenv("REDIRECT_TARGET") != "" {
			return
		}
		time.Sleep(5 * time.Minute)
		logf("proxy stop: time limit reached (5 minutes)")
		os.Exit(0)
	}()

	logPath := filepath.Join(logDir, "mitm.log")
	logFile, err := os.OpenFile(logPath, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		fatalf("cannot open log file %q: %v", logPath, err)
	}
	defer logFile.Close()

	os.Stdout = logFile
	os.Stderr = logFile

	logf("proxy start (redirect %q -> %s, everything else tunnelled)", bundleHost, redirect)

	proxy := goproxy.NewProxyHttpServer()
	proxy.Verbose = false
	proxy.Logger = gpLogger{}

	// Redirect the bundle host CONNECT to the local nginx. We hijack the
	// connection, answer 200 ourselves and pipe bytes to the redirect
	// target: the app then does its TLS handshake against nginx directly.
	proxy.OnRequest(goproxy.DstHostIs(bundleHost)).HandleConnectFunc(
		func(host string, ctx *goproxy.ProxyCtx) (*goproxy.ConnectAction, string) {
			return &goproxy.ConnectAction{
				Action: goproxy.ConnectHijack,
				Hijack: func(req *http.Request, client net.Conn, ctx *goproxy.ProxyCtx) {
					logf("REDIRECT\t%s\t->\t%s", host, redirect)
					up, derr := net.Dial("tcp", redirect)
					if derr != nil {
						ctx.Warnf("redirect dial failed: %v", derr)
						_, _ = client.Write([]byte("HTTP/1.1 502 Bad Gateway\r\n\r\n"))
						_ = client.Close()
						return
					}
					if _, werr := client.Write([]byte("HTTP/1.1 200 Connection established\r\n\r\n")); werr != nil {
						ctx.Warnf("redirect write 200 failed: %v", werr)
						_ = up.Close()
						_ = client.Close()
						return
					}
					done := make(chan struct{}, 2)
					go func() {
						_, _ = io.Copy(up, client)
						done <- struct{}{}
					}()
					go func() {
						_, _ = io.Copy(client, up)
						done <- struct{}{}
					}()
					<-done
					_ = up.Close()
					_ = client.Close()
				},
			}, host
		})

	// Log every plain HTTP request that transits the proxy.
	proxy.OnRequest().DoFunc(func(req *http.Request, ctx *goproxy.ProxyCtx) (*http.Request, *http.Response) {
		host := req.Host
		if req.URL != nil && req.URL.Host != "" {
			host = req.URL.Host
		}

		path := ""
		query := ""
		if req.URL != nil {
			path = req.URL.Path
			query = req.URL.RawQuery
		}

		if query != "" {
			path = path + "?" + query
		}

		logf("%s\t%s%s",
			req.Method,
			host,
			path,
		)

		return req, nil
	})

	srv := &http.Server{
		Addr:         ":8998",
		Handler:      proxy,
		ReadTimeout:  120 * time.Second,
		WriteTimeout: 120 * time.Second,
	}

	logf("listening on :8998")
	if err := srv.ListenAndServe(); err != nil {
		errorf("server error: %v", err)
		os.Exit(1)
	}
}

func now() string {
	return time.Now().UTC().Format("2006-01-02 15:04:05")
}

func logf(format string, args ...any) {
	fmt.Fprintf(os.Stdout, "%s\t%s\n", now(), fmt.Sprintf(format, args...))
}

func errorf(format string, args ...any) {
	fmt.Fprintf(os.Stderr, "%s\t[ERROR] %s\n", now(), fmt.Sprintf(format, args...))
}

func fatalf(format string, args ...any) {
	fmt.Fprintf(os.Stderr, "[ERROR] "+format+"\n", args...)
	os.Exit(1)
}

type gpLogger struct{}

func (gpLogger) Printf(format string, v ...any) {
	logf(fmt.Sprintf(format, v...))
}

func (gpLogger) Errorf(format string, v ...any) {
	errorf(fmt.Sprintf(format, v...))
}