#!/bin/sh

HOSTS="/mnt/lg/user/var/palm/jail/$TARGET_APP_NAME/etc/hosts"
HOST_ENTRY="127.0.0.1 cloudfront.xp-assets.aiv-cdn.net"
HOSTS_BAK="$BASE/hosts.bak"

ACCESS_LOG="$BASE/logs/access.log"

netshim_pre() {
  log "preparing network for app intercept..."
  [ -x "$NGINX_BIN" ] || die "nginx not executable: $NGINX_BIN"
  [ -f "$NGINX_CONF" ] || die "nginx.conf missing: $NGINX_CONF"

  # ensure parent directory exists
  HOSTS_DIR=$(dirname "$HOSTS")
  [ -d "$HOSTS_DIR" ] || mkdir -p "$HOSTS_DIR" || die "cannot create dir: $HOSTS_DIR"

  # ensure hosts file exists
  [ -f "$HOSTS" ] || : >"$HOSTS" || die "cannot create hosts: $HOSTS"

  if ! [ -f "$HOSTS_BAK" ]; then
    cp "$HOSTS" "$HOSTS_BAK" || die "hosts backup failed"
    log "Host entry backup success"
  fi
  if ! grep -q "$HOST_ENTRY" "$HOSTS"; then
    echo "$HOST_ENTRY" >> "$HOSTS" || die "hosts append failed"
    log "Host entry modified"
  fi

  rm -f "$ACCESS_LOG" "$NGINX_PID"
  "$NGINX_BIN" -c "$NGINX_CONF" -g "pid $NGINX_PID;" -p "$BASE" >>"$NGINX_LOG" 2>&1 || die "nginx start failed"
  log "Proxy started"
}

netshim_wait_hit() {
  log "waiting for app to load proxy..."
  i=0
  while [ $i -lt 20 ]; do
    [ -f "$ACCESS_LOG" ] && grep -q 'ATVUnfPlayerBundle\.js' "$ACCESS_LOG" && return 0
    sleep 1
    i=$((i+1))
  done
  return 1
}

netshim_post() {
  if netshim_wait_hit; then
    log "app successfully loaded proxy"
    toast "AmazOff loaded!"
  else
    log "app did not query proxy"
    log "check out nginx access log (/tmp/patcher/logs/access.log)"
    toast "Failed to load AmazOff."
  fi

  if [ -f "$NGINX_PID" ]; then
    kill "$(cat "$NGINX_PID")" 2>/dev/null
    log "Proxy stopped"
  fi

  if [ -f "$HOSTS_BAK" ]; then
    cp "$HOSTS_BAK" "$HOSTS" 2>/dev/null
    log "Host entry restored"
  fi
}
