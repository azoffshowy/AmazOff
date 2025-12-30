#!/bin/sh
BASE="/tmp/patcher"
APP_ID="com.amazoff.patcher"
TARGET_BASE_DIR="/media/cryptofs/apps/usr/palm/applications"
TARGET_APP_NAME="amazon"
APP_NAME_A="amazon"
APP_NAME_B="lovefilm"
LOG="$BASE/patcher.log"
LOCK_DIR="$BASE/patcher.lock"
TOOLS_DIR="/media/developer/apps/usr/palm/applications/com.amazoff.patcher/tools"
NGINX_BIN="$TOOLS_DIR/nginx/nginx"
NGINX_CONF="$TOOLS_DIR/nginx/nginx.conf"
NGINX_PID="$BASE/nginx.pid"
NGINX_LOG="$BASE/logs/nginx.log"
TBF="--log-file=tmp/amz.log --log-level=ALL:DEBUG"
TCF="--disable-ssl-cert"

mkdir -p "$BASE"
mkdir -p "$BASE/logs"
mkdir -p "$BASE/nginx"

log() {
  echo "$*" >> "$LOG"
}

die() {
  log "ERROR: $*"
  exit 1
}

lock_acquire() {
  if mkdir "$LOCK_DIR" 2>/dev/null; then
    return 0
  fi
  return 1
}

lock_release() {
  rmdir "$LOCK_DIR" 2>/dev/null
}

require_root() {
  if [ "$(id -u 2>/dev/null)" != "0" ]; then
    die "not root (must be run via hbchannel exec)"
  fi
}

toast() {
  luna-send -n 1 luna://com.webos.notification/createToast \
    "{\"message\":\"$1\", \"iconUrl\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/amazoff.png\", \"sourceId\":\"com.amazoff.patcher\"}" >/dev/null 2>&1
}

if [ -d "$TARGET_BASE_DIR/$APP_NAME_A" ]; then
    TARGET_APP_NAME="$APP_NAME_A"
elif [ -d "$TARGET_BASE_DIR/$APP_NAME_B" ]; then
    TARGET_APP_NAME="$APP_NAME_B"
else
    die "No target app found"
fi
TARGET_DIR="$TARGET_BASE_DIR/$TARGET_APP_NAME"
