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
    ;;
  stop)
    : > "$LOG"
    log "stopping network inject"
    monitor_stop
    netshim_stop_nginx
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
  *)
    echo "usage: patchctl.sh start|stop|patch|unpatch|status" >> "$LOG"
    exit 1
    ;;
esac
