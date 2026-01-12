# lib/monitor.sh
MON_PID="$BASE/monitor.pid"
TRIGGER_RE='ATVUnfPlayerBundle\.js.*200'   # adapt to your log format

pid_alive() { [ -n "$1" ] && kill -0 "$1" 2>/dev/null; }
read_pidfile() { [ -f "$1" ] && cat "$1" 2>/dev/null; }

monitor_loop() {
  LOG=$LOG_MON
  echo "$$" >"$MON_PID" 2>/dev/null || exit 1

  log "monitor running pid=$$ log=$NGINX_ACCESS_LOG re=$TRIGGER_RE"

  # -n 0 ignores existing lines at start.
  ( tail -n 0 -F "$NGINX_ACCESS_LOG" 2>/dev/null || tail -n 0 -f "$NGINX_ACCESS_LOG" ) |
  while IFS= read -r line; do
    echo "$line" | grep -qE "$TRIGGER_RE" || continue
    toast "AmazOff loaded"
    log "AmazOff toast triggered"
  done
}

monitor_start() {
  require_root

  p="$(read_pidfile "$MON_PID" || true)"
  if pid_alive "$p"; then
    log "monitor already running pid=$p"
    return 0
  fi
  rm -f "$MON_PID" 2>/dev/null || true

  log "starting monitor daemon"

  : > "$LOG_MON"

  daemonize "$LOG_MON" sh -c '
    . "'"$SCRIPTS_DIR/common.sh"'"
    . "'"$SCRIPTS_DIR/monitor.sh"'"
    monitor_loop
  '

  # Wait briefly for pidfile creation
  i=0
  while [ ! -s "$MON_PID" ] && [ $i -lt 2 ]; do
    sleep 1
    i=$((i+1))
  done

  p="$(read_pidfile "$MON_PID" || true)"
  pid_alive "$p" && log "monitor started pid=$p" || log "Monitor start FAILED"
}

monitor_stop() {
  require_root
  p="$(read_pidfile "$MON_PID" || true)"
  if pid_alive "$p"; then
    log "stopping monitor pid=$p"
    kill -TERM "-$p" 2>/dev/null || kill -TERM "$p" 2>/dev/null || true
  fi
  rm -f "$MON_PID" 2>/dev/null || true
}


monitor_status_log() {
  log "---- MONITOR INFO ----"
  p="$(read_pidfile "$MON_PID" || true)"
  if pid_alive "$p"; then
    log "monitor: running pid=$p"
  else
    log "monitor: not running"
  fi
}


monitor_running(){
  p="$(read_pidfile "$MON_PID" || true)"
  if pid_alive "$p"; then
    return 0
  else
    return 1;
  fi
}