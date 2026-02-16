#!/bin/sh
TARGET_CERT_DIR="$TARGET_DIR/bin/certs"
TARGET_CERT_DIR_LOVEFILM="$TARGET_DIR/plugins/com.amazon.ignition.framework.network/static/0.6.5/certs/ca-certs"
TARGET_CONF_LOVEFILM="$TARGET_DIR/plugins/com.amazon.ignition.framework.core/static/0.22.11/ignition-config.txt"
TARGET_CHUNK_LOVEFILM="$TARGET_DIR/plugins/com.amazon.ignition.app.stark/var/chunks-cache/chunk-0.js"
CERT_NAME="fe1de658.0"
HOSTS_JAIL="/mnt/lg/user/var/palm/jail/$TARGET_APP_NAME/etc/hosts"
HOSTS_SYSTEM="/etc/hosts"
HOST_ENTRY="127.0.0.1 cloudfront.xp-assets.aiv-cdn.net"
HOST_ENTRY_V6="::1 cloudfront.xp-assets.aiv-cdn.net"

patch_cert_pin() {
  if [ -d  $TARGET_CERT_DIR ]; then
    if [ ! -f "$TARGET_CERT_DIR/$CERT_NAME" ]; then
      cp "$CERT_DIR/$CERT_NAME" "$TARGET_CERT_DIR/$CERT_NAME"
      chmod 755 "$TARGET_CERT_DIR/$CERT_NAME" 2>/dev/null || true
      log "Placed CA cert"
    else
      log "CA already in place"
    fi
  elif [ -d  $TARGET_CERT_DIR_LOVEFILM ]; then
    if [ ! -f "$TARGET_CERT_DIR_LOVEFILM/$CERT_NAME" ]; then
      cp "$CERT_DIR/$CERT_NAME" "$TARGET_CERT_DIR_LOVEFILM/$CERT_NAME"
      chmod 755 "$TARGET_CERT_DIR_LOVEFILM/$CERT_NAME" 2>/dev/null || true
      log "Placed CA cert for lovefilm"
    else
      log "CA already in place"
    fi
  else
    die "No cert directory found!"
  fi
}

patch_lovefilm_conf(){
  [ -f "$TARGET_CONF_LOVEFILM.bak" ] || cp "$TARGET_CONF_LOVEFILM" "$TARGET_CONF_LOVEFILM.bak" 2>/dev/null
  cat "$CONFIGS_DIR/ignition-config.txt" > "$TARGET_CONF_LOVEFILM"
}

patch_lovefilm_chunk(){
  [ -f "$TARGET_CHUNK_LOVEFILM.bak" ] || cp "$TARGET_CHUNK_LOVEFILM" "$TARGET_CHUNK_LOVEFILM.bak" 2>/dev/null
  cat "$PATCHER_RESOURCES_DIR/patch/chunk-0.js" > "$TARGET_CHUNK_LOVEFILM"
}

patch_default_conf(){
  [ -f "$TARGET_DIR/default_config.json.bak" ] || cp "$TARGET_DIR/default_config.json" "$TARGET_DIR/default_config.json.bak" 2>/dev/null
  cat "$CONFIGS_DIR/default_config.json" > "$TARGET_DIR/default_config.json"
}

patch_debug_conf(){
  [ -f "$TARGET_DIR/default_config.json.bak" ] || cp "$TARGET_DIR/default_config.json" "$TARGET_DIR/default_config.json.bak" 2>/dev/null
  cat "$CONFIGS_DIR/default_config_debug.json" > "$TARGET_DIR/default_config.json"
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

do_patch_lovefilm() {
  require_root
  log "patching target=$TARGET_DIR"
  patch_cert_pin
  patch_lovefilm_conf
  patch_lovefilm_chunk
  log "Successfully patched"
}

do_unpatch_lovefilm() {
  require_root
  log "unpatch started: target=$TARGET_DIR"
  rm -f "$TARGET_CERT_DIR_LOVEFILM/fe1de658.0" 2>/dev/null || true
  log "removed Cert pinning"

  rm -f "$TARGET_CONF_LOVEFILM" 2>/dev/null || true
  if [ -f "$TARGET_CONF_LOVEFILM.bak" ]; then
    cat "$TARGET_CONF_LOVEFILM.bak" > "$TARGET_CONF_LOVEFILM"
    rm -f "$TARGET_CONF_LOVEFILM.bak" 2>/dev/null || true
    log "restored default_config"
  fi

  rm -f "$TARGET_CHUNK_LOVEFILM" 2>/dev/null || true
  if [ -f "$TARGET_CHUNK_LOVEFILM.bak" ]; then
    cat "$TARGET_CHUNK_LOVEFILM.bak" > "$TARGET_CHUNK_LOVEFILM"
    rm -f "$TARGET_CHUNK_LOVEFILM.bak" 2>/dev/null || true
    log "restored js resource"
  else
    log "removed js patch"
  fi
  log "Successfully unpatched"
}

is_lovefilm_patched() {
  cmp -s "$TARGET_CHUNK_LOVEFILM" "$PATCHER_RESOURCES_DIR/patch/chunk-0.js"
}

do_unpatch() {
  require_root
  log "unpatch started: target=$TARGET_DIR"
  rm -f "$TARGET_CERT_DIR/fe1de658.0" 2>/dev/null || true
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
  log "$HOSTS_SYSTEM:
$(cat $HOSTS_SYSTEM)"
  log "--------"
  log "$HOSTS_JAIL:
$(cat $HOSTS_JAIL)"
  log "--------"
}