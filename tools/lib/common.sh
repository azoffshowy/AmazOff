#!/bin/sh
BASE="/tmp/patcher"
APP_ID="com.amazoff.patcher"
TARGET_APP_NAME="amazon"
APP_NAME_A="amazon"
APP_NAME_B="lovefilm"
TARGET_BASE_DIR="/media/cryptofs/apps/usr/palm/applications"
PATCHER_BASE_DIR="/media/developer/apps/usr/palm/applications/$APP_ID"
LOGS_BASE_DIR="$BASE/logs"
LOG="$BASE/patcher.log"
LOG_MON="$BASE/monitor.log"
ASSETS_DIR="$PATCHER_BASE_DIR/assets"
TOOLS_DIR="$PATCHER_BASE_DIR/tools"
SCRIPTS_DIR="$TOOLS_DIR/lib"
NGINX_BIN="$TOOLS_DIR/nginx/nginx"
NGINX_CONF="$TOOLS_DIR/nginx/nginx.conf"
NGINX_PID="$BASE/nginx.pid"
NGINX_LOG="$LOGS_BASE_DIR/nginx.log"
NGINX_ACCESS_LOG="$LOGS_BASE_DIR/access.log"
MITM_BIN="$TOOLS_DIR/mitm/mitm"
MITM_PID="$LOGS_BASE_DIR/mitm.pid"
MITM_LOG="$LOGS_BASE_DIR/mitm.log"
AUTOSTART_ENTRY="50-custom-amazoff"
AUTOSTART_SCRIPT="$TOOLS_DIR/autostart.sh"

if [ -d "$TARGET_BASE_DIR/$APP_NAME_A" ]; then
    TARGET_APP_NAME="$APP_NAME_A"
elif [ -d "$TARGET_BASE_DIR/$APP_NAME_B" ]; then
    TARGET_APP_NAME="$APP_NAME_B"
else
    die "No target app found"
fi
TARGET_DIR="$TARGET_BASE_DIR/$TARGET_APP_NAME"

mkdir -m 777 -p "$BASE/logs"

log() {
  echo "$(date +%H:%M:%S) $*" >> "$LOG"
}

die() {
  log "ERROR: $*"
  exit 1
}

require_root() {
  if [ "$(id -u 2>/dev/null)" != "0" ]; then
    die "not root (must be run via hbchannel exec)"
  fi
}

toast() {
  luna-send -n 1 -a "$APP_ID" luna://com.webos.notification/createToast \
    "{\"message\":\"$1\", \"iconUrl\":\"$PATCHER_BASE_DIR/amazoff.png\", \"sourceId\":\"$APP_ID\"}" >/dev/null 2>&1
}
