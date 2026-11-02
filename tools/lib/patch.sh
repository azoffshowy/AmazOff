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

# WebOS 11.x detection (VERSION_ID="11.2.0" -> 11)
WEBOS_MAJOR="$(sed -n 's/^VERSION_ID="\{0,1\}\([0-9][0-9]*\).*/\1/p' /etc/os-release 2>/dev/null | head -1)"
[ -n "$WEBOS_MAJOR" ] || WEBOS_MAJOR=0

patch_cert_pin() {
  # webOS 11.x: the app directory is a read-write overlayfs (squashfs lowerdir)
  # which is only mounted while the target app runs. The pinned CA persists
  # in the overlay upperdir across app restarts and reboots, so the upperdir
  # is checked first (no mount needed); if unpinned, the target app is
  # launched once to get the overlay mounted, then the pin is retried.
  UPPER_CERT_DIR="/media/data/data/$TARGET_APP_NAME/bin/certs"
  if [ -f "$UPPER_CERT_DIR/$CERT_NAME" ]; then
    log "CA already pinned (overlay upperdir)"
    return 0
  fi
  if [ ! -d "$TARGET_CERT_DIR" ] && [ ! -d "$TARGET_CERT_DIR_LOVEFILM" ]; then
    # webOS 11.x at boot: overlay not mounted yet - launch the target app
    # once to mount it, then retry the pin below.
    log "cert dir not mounted, launching target app to mount overlay..."
    luna-send -n 1 luna://com.webos.applicationManager/launch "{\"id\":\"$TARGET_APP_NAME\"}" >/dev/null 2>&1
    i=0
    while [ ! -d "$TARGET_CERT_DIR" ] && [ $i -lt 20 ]; do
      sleep 1
      i=$((i+1))
    done
  fi
  if [ -d "$TARGET_CERT_DIR" ]; then
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
    log "WARN: no cert directory found, skipping CA pin"
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
  if [ "$WEBOS_MAJOR" -ge 11 ]; then
    # webOS 11.x: interception runs via the app proxy (http-proxy-server);
    # /etc/hosts and DNS are not honoured by the app downloader (curl/c-ares).
    SRC="$CONFIGS_DIR/default_config_webos11.json"
  else
    SRC="$CONFIGS_DIR/default_config.json"
  fi
  [ -f "$TARGET_DIR/default_config.json.bak" ] || cp "$TARGET_DIR/default_config.json" "$TARGET_DIR/default_config.json.bak" 2>/dev/null
  cat "$SRC" > "$TARGET_DIR/default_config.json"
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
  if patch_hosts_helper "$HOSTS_SYSTEM"; then
    log "Patched system hosts"
  else
    log "Skipped system hosts (read-only)"
  fi
  if patch_hosts_helper "$HOSTS_JAIL"; then
    log "Patched jail hosts"
  else
    log "WARN: could not patch jail hosts"
  fi
}

unpatch_hosts(){
  if unpatch_hosts_helper "$HOSTS_SYSTEM"; then
    log "Unpatched system hosts"
  else
    log "Skipped system hosts (read-only)"
  fi
  if unpatch_hosts_helper "$HOSTS_JAIL"; then
    log "Unpatched jail hosts"
  else
    log "WARN: could not unpatch jail hosts"
  fi
}

patch_hosts_helper() {
  f="$1"
  d="$(dirname "$f")"

  # webOS 11.x: /etc/hosts is read-only; the jail hosts file is what the
  # webview honours, so a read-only system hosts file is tolerated.
  mkdir -p "$d" 2>/dev/null || true
  [ -f "$f" ] || : >"$f" 2>/dev/null || { log "WARN: cannot create $f"; return 1; }

  ok=0
  if awk -v line="$HOST_ENTRY" '
    $0 == line { found=1 }
    END { exit (found ? 0 : 1) }
  ' "$f" 2>/dev/null; then
    ok=1
  elif printf '\n%s\n' "$HOST_ENTRY" >>"$f" 2>/dev/null; then
    ok=1
  fi

  if awk -v line="$HOST_ENTRY_V6" '
    $0 == line { found=1 }
    END { exit (found ? 0 : 1) }
  ' "$f" 2>/dev/null; then
    ok=1
  elif printf '\n%s\n' "$HOST_ENTRY_V6" >>"$f" 2>/dev/null; then
    ok=1
  fi

  [ "$ok" = 1 ] || log "WARN: cannot write $f (read-only)"
  return "$ok"
}

unpatch_hosts_helper() {
  f="$1"
  if [ ! -f "$f" ]; then
    log "WARN: hosts missing: $f"
    return 1
  fi

  tmp="/tmp/hosts.tmp.$$"
  awk -v line="$HOST_ENTRY" '$0 != line { print }' "$f" >"$tmp" 2>/dev/null || { rm -f "$tmp"; log "WARN: cannot unpatch $f"; return 1; }
  awk -v line="$HOST_ENTRY_V6" '$0 != line { print }' "$f" >"$tmp" 2>/dev/null || { rm -f "$tmp"; log "WARN: cannot unpatch $f"; return 1; }
  cat "$tmp" > "$f" 2>/dev/null || { rm -f "$tmp"; log "WARN: cannot write $f (read-only)"; return 1; }
  rm -f "$tmp"
  return 0
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