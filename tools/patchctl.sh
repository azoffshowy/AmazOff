#!/bin/sh
DIR="$(dirname "$0")"
. "$DIR/lib/common.sh"
. "$DIR/lib/netshim.sh"
. "$DIR/lib/patch.sh"

require_root

case "$1" in
  trap)
    : > "$LOG"
    log "Starting app-hook"
    lock_acquire || die "busy"
    trap 'lock_release' EXIT
    netshim_pre

    nohup /bin/sh -c "$TOOLS_DIR/patchctl.sh trapWait" \
      >>"$LOG" 2>&1 </dev/null &

    exit 0
    ;;
  trapWait)
    netshim_post
    lock_release
    exit 0
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
    patch_status_log
    ;;
  *)
    echo "usage: patchctl.sh trap|trapWait|patch|unpatch|status" >> "$LOG"
    exit 1
    ;;
esac
