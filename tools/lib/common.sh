#!/bin/sh
BASE="/tmp/patcher"
LOGS_BASE_DIR="$BASE/logs"
LOG="$BASE/patcher.log"

mkdir -m 777 -p "$LOGS_BASE_DIR"

log() {
  if [ ! -f "$LOG" ]; then
    : > $LOG
  fi
  echo "$(date +%H:%M:%S) $*" >> "$LOG"
}

die() {
  log "ERROR: $*"
  echo "$(cat $LOG)"
  exit 1
}


APP_ID="com.amazoff.patcher"
TARGET_APP_NAME="amazon"
APP_NAME_A="amazon"
APP_NAME_B="lovefilm"
TARGET_BASE_DIR="/media/cryptofs/apps/usr/palm/applications"
TOASTFIX=""

if [ -d "$TARGET_BASE_DIR/$APP_NAME_A" ]; then
    TARGET_APP_NAME="$APP_NAME_A"
elif [ -d "$TARGET_BASE_DIR/$APP_NAME_B" ]; then
    TARGET_APP_NAME="$APP_NAME_B"
    TOASTFIX="-a \"$APP_ID\""
else
    die "No target app found"
fi
TARGET_DIR="$TARGET_BASE_DIR/$TARGET_APP_NAME"


PATCHER_BASE_DIR="/media/developer/apps/usr/palm/applications/$APP_ID"
PATCHER_RESOURCES_DIR="$PATCHER_BASE_DIR/resources/$TARGET_APP_NAME"
LOG_MON="$LOGS_BASE_DIR/monitor.log"
CONFIGS_DIR="$PATCHER_RESOURCES_DIR/config"
CERT_DIR="$PATCHER_RESOURCES_DIR/tls"
TOOLS_DIR="$PATCHER_BASE_DIR/tools"
SCRIPTS_DIR="$TOOLS_DIR/lib"
NGINX_BIN="$TOOLS_DIR/nginx/nginx"
NGINX_CONF="$CONFIGS_DIR/nginx.conf"
NGINX_PID="$BASE/nginx.pid"
NGINX_LOG="$LOGS_BASE_DIR/nginx.log"
NGINX_ACCESS_LOG="$LOGS_BASE_DIR/access.log"
MITM_BIN="$TOOLS_DIR/mitm/mitm"
MITM_PID="$LOGS_BASE_DIR/mitm.pid"
MITM_LOG="$LOGS_BASE_DIR/mitm.log"
AUTOSTART_ENTRY="50-custom-amazoff"
AUTOSTART_SCRIPT="$TOOLS_DIR/autostart.sh"


require_root() {
  if [ "$(id -u 2>/dev/null)" != "0" ]; then
    die "not root (must be run via hbchannel exec)"
  fi
}

toast() {
  luna-send -n 1 $TOASTFIX luna://com.webos.notification/createToast \
    "{\"message\":\"$1\", \"iconUrl\":\"$PATCHER_BASE_DIR/amazoff.png\", \"sourceId\":\"$APP_ID\"}" >/dev/null 2>&1
}

daemonize() {
  log_daemon="$1"; shift
  echo "starting daemonize pid=$$" > $log_daemon

  if command -v setsid >/dev/null 2>&1; then
    echo "starting daemonize with setsid" >> $log_daemon
    setsid sh -c '
      log_daemon="$1"; shift
      exec </dev/null >>"$log_daemon" 2>&1
      echo "daemonize entered pid=$$" >&2
      # close all inherited fds except 0/1/2
      for fdpath in /proc/$$/fd/*; do
        fd="${fdpath##*/}"
        case "$fd" in
          0|1|2) ;;
          *) eval "exec ${fd}>&- ${fd}<&-" ;;
        esac
      done
      echo "daemonize will now exec" >&2
      exec "$@"
    ' sh "$log_daemon" "$@" &
  else
    echo "starting daemonize with nohup" >> $log_daemon
    nohup sh -c '
      log_daemon="$1"; shift
      exec </dev/null >>"$log_daemon" 2>&1
      echo "daemonize entered pid=$$" >&2
      for fdpath in /proc/$$/fd/*; do
        fd="${fdpath##*/}"
        case "$fd" in
          0|1|2) ;;
          *) eval "exec ${fd}>&- ${fd}<&-" ;;
        esac
      done
      echo "daemonize will now exec" >&2
      exec "$@"
    ' sh "$log_daemon" "$@" &
  fi
}
