#!/bin/sh
DIR="$(dirname "$0")"
. "$DIR/lib/common.sh"
. "$DIR/lib/netshim.sh"
. "$DIR/lib/patch.sh"
. "$DIR/lib/monitor.sh"

require_root

SERVICESTATE="unknown"
setServiceState(){
  if [ "$TARGET_APP_NAME" = "$APP_NAME_LOVEFILM" ]; then
    if is_lovefilm_patched; then
      SERVICESTATE="running"
    elif [ "${1:-}" = "start" ]; then
      SERVICESTATE="error"
    else
      SERVICESTATE="stopped"
    fi
  else
    if monitor_running && netshim_running; then
      SERVICESTATE="running"
    elif [ "${1:-}" = "start" ]; then
      SERVICESTATE="error"
    else
      SERVICESTATE="stopped"
    fi
  fi
}

AUTOSTART_ENABLED="false"
setAutostartState(){
if [ -f "/var/lib/webosbrew/init.d/$AUTOSTART_ENTRY" ]; then
  AUTOSTART_ENABLED="true"
else
  AUTOSTART_ENABLED="false"
fi
}

printState(){
  echo -n "{\"state\":{\"autostart\":${AUTOSTART_ENABLED:-},\"logs\":\"$(base64 < "$LOG" | tr -d '\n')\", \"service\":\"$SERVICESTATE\"}}"
}

case "$1" in
  start)
    : > "$LOG"
    if [ "$TARGET_APP_NAME" = "$APP_NAME_LOVEFILM" ]; then
      do_patch_lovefilm
    else
      log "starting network inject"
      do_patch
      netshim_start_nginx
      monitor_start
      if monitor_running && netshim_running; then
        log "Start successful"
      else
        log "Start failed"
      fi
    fi
    ;;
  stop)
    : > "$LOG"
    if [ "$TARGET_APP_NAME" = "$APP_NAME_LOVEFILM" ]; then
      do_unpatch_lovefilm
    else
      log "stopping network inject"
      monitor_stop
      netshim_stop_nginx
      netshim_stop_mitm
      log "Stop successful"
    fi
    ;;
  debug)
    : > "$LOG"
    #broken on lovefilm
    log "starting debug setup"
    do_patch
    patch_debug_conf
    patch_debug_certs
    netshim_start_nginx
    netshim_start_mitm
    monitor_start
    log "Debug start successful"
    ;;
  patch)
    : > "$LOG"
    #broken on lovefilm
    log "starting patch routine"
    do_patch
    ;;
  unpatch)
    : > "$LOG"
    #broken on lovefilm
    log "starting unpatch routine"
    do_unpatch
    ;;
  status)
    : > "$LOG"
    monitor_status_log
    netshim_status_log
    patch_status_log
    ;;
  autostart_toggle)
    : > "$LOG"
    setAutostartState
    if [ "${AUTOSTART_ENABLED:-}" = "true" ]; then
      rm -rf "/var/lib/webosbrew/init.d/$AUTOSTART_ENTRY" >>"$LOG" 2>&1 && log "Removed Autostart"
    else
      mkdir -p /var/lib/webosbrew/init.d && ln -sf "$AUTOSTART_SCRIPT" "/var/lib/webosbrew/init.d/$AUTOSTART_ENTRY" >>"$LOG" 2>&1 && log "Set Autostart"
    fi
    ;;
  *)
    echo "usage: patchctl.sh start|stop|debug|patch|unpatch|status" >> "$LOG"
    exit 1
    ;;
esac
setServiceState "${1:-}"
setAutostartState
printState
if [ "$SERVICESTATE" = "error" ];then
  if [ "$TARGET_APP_NAME" = "$APP_NAME_LOVEFILM" ]; then
    do_unpatch_lovefilm
  else
    #recover partial start
    monitor_stop
    netshim_stop_nginx
    netshim_stop_mitm
  fi
fi
exit 0
