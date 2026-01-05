#!/bin/sh
DIR="$(dirname "$0")"
. "$DIR/lib/common.sh"
. "$DIR/lib/netshim.sh"
. "$DIR/lib/patch.sh"
. "$DIR/lib/monitor.sh"

require_root

case "$1" in
  start)
    : > "$LOG"
    log "starting network inject"
    do_patch
    netshim_start_nginx
    monitor_start
    log "Start successful"
    ;;
  stop)
    : > "$LOG"
    log "stopping network inject"
    monitor_stop
    netshim_stop_nginx
    netshim_stop_mitm
    log "Stop successful"
    ;;
  debug)
    : > "$LOG"
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
    log "starting patch routine"
    do_patch
    ;;
  unpatch)
    : > "$LOG"
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
    if [ -f "/var/lib/webosbrew/init.d/$AUTOSTART_ENTRY" ]; then
      rm -rf "/var/lib/webosbrew/init.d/$AUTOSTART_ENTRY" 2>&1 >> $LOG && log "Removed Autostart"
    else
      mkdir -p /var/lib/webosbrew/init.d && ln -sf $AUTOSTART_SCRIPT /var/lib/webosbrew/init.d/$AUTOSTART_ENTRY 2>&1 >> $LOG && log "Set Autostart"
    fi
    ;;
  *)
    echo "usage: patchctl.sh start|stop|debug|patch|unpatch|status" >> "$LOG"
    exit 1
    ;;
esac
