#!/bin/sh
ACCESS_LOG="$BASE/logs/access.log"

pid_alive() { [ -n "$1" ] && kill -0 "$1" 2>/dev/null; }

netshim_start_nginx() {
  p="$(read_pidfile "$NGINX_PID" || true)"
  if pid_alive "$p"; then
    log "nginx already running pid=$p"
    return 0
  fi

  log "preparing network for app intercept..."
  [ -x "$NGINX_BIN" ] || die "nginx not executable: $NGINX_BIN"
  [ -f "$NGINX_CONF" ] || die "nginx.conf missing: $NGINX_CONF"
  
  rm -f "$ACCESS_LOG" "$NGINX_PID" "$NGINX_LOG" 2>/dev/null
  "$NGINX_BIN" -c "$NGINX_CONF" -g "pid $NGINX_PID;" -p "$BASE" >>"$NGINX_LOG" 2>&1 || { netshim_clean; die "nginx start failed"; }
  log "Proxy started pid: $(cat $NGINX_PID)"
}

netshim_stop_nginx() {
  if [ -f "$NGINX_PID" ]; then
    kill "$(cat "$NGINX_PID")" 2>/dev/null
    rm -f -- "$NGINX_PID"
    log "Proxy stopped"
  fi
}


netshim_status_log() {

  p="$(read_pidfile "$NGINX_PID" || true)"
  log ""
  log "---- NET INFO ----"
  if pid_alive "$p"; then
      log "NGINX: ON"
  else
      log "NGINX: OFF"
  fi
  log "access log: 
$(cat $ACCESS_LOG)"
  log "--------------"
}