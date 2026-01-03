#!/bin/sh

HOSTS_JAIL="/mnt/lg/user/var/palm/jail/$TARGET_APP_NAME/etc/hosts"
HOSTS_JAIL_BAK="$BASE/hosts.jail.bak"
HOSTS="/etc/hosts"
HOSTS_BAK="$BASE/hosts.system.bak"
HOST_ENTRY="127.0.0.1 cloudfront.xp-assets.aiv-cdn.net"

ACCESS_LOG="$BASE/logs/access.log"

netshim_pre() {
  log "preparing network for app intercept..."
  [ -x "$NGINX_BIN" ] || die "nginx not executable: $NGINX_BIN"
  [ -f "$NGINX_CONF" ] || die "nginx.conf missing: $NGINX_CONF"

  # hosts jail: ensure dir + file exist
  mkdir -p "$(dirname -- "$HOSTS_JAIL")" || die "cannot create dir: $(dirname -- "$HOSTS_JAIL")"
  : >"$HOSTS_JAIL" 2>/dev/null || die "cannot create hosts: $HOSTS_JAIL"

  backup_overwrite() {
    # $1=src $2=bak $3=success_log
    cp -- "$1" "$2" || die "backup failed: $1 -> $2" 
    log "$3"
  }

  ensure_line() {
    # $1=file $2=line $3=logmsg
    grep -Fqx -- "$2" "$1" 2>/dev/null || {
      printf '%s\n' "$2" >>"$1" || { netshim_clean; die "append failed: $1"; }
      log "$3"
    }
  }

  backup_overwrite "$HOSTS_JAIL" "$HOSTS_JAIL_BAK" "Jail Host entry backup success"
  backup_overwrite "$HOSTS"      "$HOSTS_BAK"      "Host entry backup success"

  ensure_line "$HOSTS_JAIL" "$HOST_ENTRY" "Jail Host entry modified"
  ensure_line "$HOSTS"      "$HOST_ENTRY" "Host entry modified"

  rm -f "$ACCESS_LOG" "$NGINX_PID" "$NGINX_LOG" 2>/dev/null
  "$NGINX_BIN" -c "$NGINX_CONF" -g "pid $NGINX_PID;" -p "$BASE" >>"$NGINX_LOG" 2>&1 || { netshim_clean; die "nginx start failed"; }
  log "Proxy started"
}

netshim_wait_hit() {
  log "waiting for app to load proxy..."
  i=0
  while [ $i -lt 30 ]; do
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
  netshim_clean
}

netshim_clean() {
  if [ -f "$NGINX_PID" ]; then
    kill "$(cat "$NGINX_PID")" 2>/dev/null
    rm -f -- "$NGINX_PID"
    log "Proxy stopped"
  fi

  if [ -f "$HOSTS_BAK" ]; then
    cp -- "$HOSTS_BAK" "$HOSTS" 2>/dev/null
    log "Host entry restored"
  fi

  if [ -f "$HOSTS_JAIL_BAK" ]; then
    cp -- "$HOSTS_JAIL_BAK" "$HOSTS_JAIL" 2>/dev/null
    log "Jail Host entry restored"
  fi
}
