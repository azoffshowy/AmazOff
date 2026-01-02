package main

import (
	"crypto/tls"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"time"
	"github.com/elazarl/goproxy"
)

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

	go func() {
		time.Sleep(4 * time.Minute)
		logf("proxy stop: time limit reached (4 minutes)")
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

	logf("proxy start")

	proxy := goproxy.NewProxyHttpServer()
	proxy.Verbose = false
	proxy.Logger = gpLogger{}

	proxy.OnRequest().HandleConnect(goproxy.AlwaysMitm)

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
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		TLSConfig:    &tls.Config{MinVersion: tls.VersionTLS12},
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