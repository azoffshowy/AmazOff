#!/usr/bin/env python3
import sys
import os
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from threading import Lock

LOG_FILE = "homebrew_debug.log"
_write_lock = Lock()


class LogRequestHandler(BaseHTTPRequestHandler):
    server_version = "HomebrewLogServer/0.3"

    def do_POST(self):
        if self.path != "/log":
            self.send_error(404, "Not Found")
            return

        content_length = self.headers.get("Content-Length")
        try:
            length = int(content_length) if content_length is not None else 0
        except ValueError:
            length = 0

        body_bytes = self.rfile.read(length)
        body = body_bytes.decode("utf-8", errors="replace")

        # Console
        print(body)
        sys.stdout.flush()

        # File (thread-safe append)
        with _write_lock:
            with open(LOG_FILE, "a", encoding="utf-8") as f:
                f.write(body + os.linesep)

        self.send_response(200)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.end_headers()
        self.wfile.write(b"OK\n")

    def log_message(self, format, *args):
        return  # suppress default HTTP access log


def run(port: int = 8089):
    server_address = ("", port)
    httpd = ThreadingHTTPServer(server_address, LogRequestHandler)

    print(f"Listening on http://0.0.0.0:{port}/log")
    print(f"Writing logs to: {os.path.abspath(LOG_FILE)}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


if __name__ == "__main__":
    run(8089)