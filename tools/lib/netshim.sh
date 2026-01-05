#!/bin/sh
ACCESS_LOG="$BASE/logs/access.log"

pid_alive() { [ -n "$1" ] && kill -0 "$1" 2>/dev/null; }

netshim_start_mitm() {
  p="$(read_pidfile "$MITM_PID" || true)"
  if pid_alive "$p"; then
    log "MITM already running pid=$p"
    return 0
  fi

  log "preparing debug MITM for app intercept..."
  [ -x "$MITM_BIN" ] || die "MITM not executable: $MITM_BIN"
  
  rm -f "$MITM_LOG" "$MITM_PID" 2>/dev/null
  "$MITM_BIN" $LOGS_BASE_DIR 2>&1 || die "mitm start failed"

  # Wait briefly for pidfile creation
  i=0
  while [ ! -s "$MITM_PID" ] && [ $i -lt 2 ]; do
    sleep 1
    i=$((i+1))
  done

  p="$(read_pidfile "$MITM_PID" || true)"
  pid_alive "$p" && log "MITM started pid=$p" || log "MITM start failed"
}

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
  "$NGINX_BIN" -c "$NGINX_CONF" -g "pid $NGINX_PID;" -p "$BASE" >>"$NGINX_LOG" 2>&1 || die "nginx start failed"

  # Wait briefly for pidfile creation
  i=0
  while [ ! -s "$NGINX_PID" ] && [ $i -lt 2 ]; do
    sleep 1
    i=$((i+1))
  done

  p="$(read_pidfile "$NGINX_PID" || true)"
  pid_alive "$p" && log "NGINX started pid=$p" || log "NGINX start failed"
}

netshim_stop_nginx() {
  if [ -f "$NGINX_PID" ]; then
    kill "$(cat "$NGINX_PID")" 2>/dev/null
    rm -f -- "$NGINX_PID"
    log "Proxy stopped"
  fi
}

netshim_stop_mitm() {
  if [ -f "$MITM_PID" ]; then
    kill "$(cat "$MITM_PID")" 2>/dev/null
    rm -f -- "$MITM_PID"
    log "MITM stopped"
  fi
}

netshim_status_log() {
  p="$(read_pidfile "$NGINX_PID" || true)"
  pm="$(read_pidfile "$MITM_PID" || true)"
  log ""
  log "---- NET INFO ----"
  if pid_alive "$p"; then
    log "NGINX: running pid=$p"
    log "access log: 
$(cat $ACCESS_LOG)"
  else
      log "NGINX: not running"
  fi
  if pid_alive "$pm"; then
    log "MITM: running pid=$p"
    log "MITM log: $MITM_LOG"
  else
    log "MITM: not running"
  fi
}