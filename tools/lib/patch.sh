#!/bin/sh
CERT_DIR="$TARGET_DIR/bin/certs"
CERT_DIR_LOVEFILM="$TARGET_DIR/plugins/com.amazon.ignition.framework.network/static/0.6.5/certs/ca-certs"
CERT_NAME="fe1de658.0"
HOSTS_JAIL="/mnt/lg/user/var/palm/jail/$TARGET_APP_NAME/etc/hosts"
HOSTS_SYSTEM="/etc/hosts"
HOST_ENTRY="127.0.0.1 cloudfront.xp-assets.aiv-cdn.net"
HOST_ENTRY_V6="::1 cloudfront.xp-assets.aiv-cdn.net"

patch_cert_pin() {
  if [ -d  $CERT_DIR ]; then
    if [ ! -f "$CERT_DIR/$CERT_NAME" ]; then
      cp "$ASSETS_DIR/$CERT_NAME" "$CERT_DIR/$CERT_NAME"
      chmod 755 "$CERT_DIR/$CERT_NAME" 2>/dev/null || true
      log "Placed CA cert"
    else
      log "CA already in place"
    fi
  elif [ -d  $CERT_DIR_LOVEFILM ]; then
    if [ ! -f "$CERT_DIR_LOVEFILM/$CERT_NAME" ]; then
      cp "$ASSETS_DIR/$CERT_NAME" "$CERT_DIR_LOVEFILM/$CERT_NAME"
      chmod 755 "$CERT_DIR_LOVEFILM/$CERT_NAME" 2>/dev/null || true
      log "Placed CA cert for lovefilm"
    else
      log "CA already in place"
    fi
  else
    log "No cert directory found!"
  fi
}

patch_default_conf(){
  [ -f "$TARGET_DIR/default_config.json.bak" ] || cp "$TARGET_DIR/default_config.json" "$TARGET_DIR/default_config.json.bak" 2>/dev/null
  cat "$ASSETS_DIR/default_config.json" > "$TARGET_DIR/default_config.json"
}

patch_debug_conf(){
  [ -f "$TARGET_DIR/default_config.json.bak" ] || cp "$TARGET_DIR/default_config.json" "$TARGET_DIR/default_config.json.bak" 2>/dev/null
  cat "$ASSETS_DIR/default_config_debug.json" > "$TARGET_DIR/default_config.json"
  log "Patched Debug config"
  mkdir -m 777 -p "$TARGET_DIR/logs" 2>/dev/null || true
}

patch_debug_certs(){
  cp -r "$TOOLS_DIR/mitm/certcache" "$LOGS_BASE_DIR" 2>/dev/null || true
  log "Preload certs"
}

patch_hosts(){
  patch_hosts_helper "$HOSTS_SYSTEM"
  log "Patched system hosts"
  patch_hosts_helper "$HOSTS_JAIL"
  log "Patched jail hosts"
}

unpatch_hosts(){
  unpatch_hosts_helper "$HOSTS_SYSTEM"
  log "Unpatched system hosts"
  unpatch_hosts_helper "$HOSTS_JAIL" 
  log "Unpatched jail hosts"
}

patch_hosts_helper() {
  f="$1"
  d="$(dirname "$f")"

  mkdir -p "$d" || die "mkdir failed: $d"
  [ -f "$f" ] || : >"$f" || die "create failed: $f"

  awk -v line="$HOST_ENTRY" '
    $0 == line { found=1 }
    END { exit (found ? 0 : 1) }
  ' "$f" || printf '\n%s\n' "$HOST_ENTRY" >>"$f"

  awk -v line="$HOST_ENTRY_V6" '
    $0 == line { found=1 }
    END { exit (found ? 0 : 1) }
  ' "$f" || printf '\n%s\n' "$HOST_ENTRY_V6" >>"$f"
}

unpatch_hosts_helper() {
  f="$1"
  [ -f "$f" ] || die "hosts missing: $f"

  tmp="/tmp/hosts.tmp.$$"
  awk -v line="$HOST_ENTRY" '$0 != line { print }' "$f" >"$tmp" || die "write tmp failed: $tmp"
  awk -v line="$HOST_ENTRY_V6" '$0 != line { print }' "$f" >"$tmp" || die "write tmp failed: $tmp"
  cat "$tmp" > "$f" || { rm -f "$tmp"; die "replace failed: $f"; }
}

do_patch() {
  require_root
  log "patching target=$TARGET_DIR"
  patch_default_conf
  patch_cert_pin
  patch_hosts
  log "Successfully patched"
}

do_unpatch() {
  require_root
  log "unpatch started: target=$TARGET_DIR"
  rm -f "$CERT_DIR/fe1de658.0" 2>/dev/null || true
  log "removed Cert pinning"
  unpatch_hosts
  if [ -f "$TARGET_DIR/default_config.json.bak" ]; then
    cat "$TARGET_DIR/default_config.json.bak" > "$TARGET_DIR/default_config.json"
    rm -f "$TARGET_DIR/default_config.json.bak" 2>/dev/null || true
    log "restored default_config"
  fi
  log "Successfully unpatched"
}


patch_status_log() {
  log ""
  log "---- PATCH INFO ----"
  log "targetAppName: $TARGET_APP_NAME"
  log "targetAppDir: $TARGET_DIR"
  if [ -f "$CERT_DIR/$CERT_NAME" ]; then
    log "CA in place"
  else
    log "CA not found"
  fi
  log "--------"
  log "default_config:
$(cat $TARGET_DIR/default_config.json)"
  log "--------"
  log "$HOSTS_SYSTEM:
$(cat $HOSTS_SYSTEM)"
  log "--------"
  log "$HOSTS_JAIL:
$(cat $HOSTS_JAIL)"
  log "--------"
}