#!/bin/sh
PATCH_VERSION="1.0.0"
APPINFO="$TARGET_DIR/appinfo.json"
APPINFO_BAK="$BASE/appinfo.json.bak"
WRAP_NAME="prox"
WRAP_DIR="$TARGET_DIR/bin"
WRAP_MAIN="$WRAP_DIR/prox"
WRAP_MAIN_REL="bin/prox"

TARGET_BIN="bin/ignition $TCF"

generate_wrapper() {
  mkdir -p "$WRAP_DIR" || die "mkdir wrapper failed"
  mkdir -m 777 -p "$TARGET_DIR/logs" || die "mkdir logs failed"

  cat > "$WRAP_MAIN" <<EOF
#!/bin/bash
# AMAZOFF_PATCH_VERSION=$PATCH_VERSION
exec >logs/patch_out.log 2>logs/patch_err.log
echo "AmazOff Wrapper $PATCH_VERSION"
echo "\$(date): called with \$@"

toast() { 
  luna-send-pub -n 1 luna://com.webos.notification/createToast \ "{\"message\":\"\$1\", \"iconUrl\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/amazoff.png\", \"sourceId\":\"com.amazoff.patcher\"}" >/dev/null 2>&1 
}

echo "Loading AmazOff..."
toast "Loading AmazOff..."

RESP=\$(luna-send-pub -n 1 luna://org.webosbrew.hbchannel.service/exec \
  "{\"command\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/tools/patchctl.sh trap\"}")
case "\$RESP" in
  *'"returnValue":true'*)
    # success
    echo "Triggered AmazOff trap."
    ;;
  *)
    # failure
    echo "Failed to trigger. Check out /tmp/patcher/patcher.log"
    toast "Failed to trigger. Check out /tmp/patcher/patcher.log"
    ;;
esac

TARGET="\${0/$WRAP_NAME/ignition}"
[ "\$TARGET" = "\$0" ] && TARGET="bin/ignition"

exec \$TARGET $TCF \$@ >logs/amz_out.log 2>logs/amz_err.log

EOF

  chmod 755 "$WRAP_MAIN" 2>/dev/null || true
  log "generated proxy-wrapper for target app"
}

generate_proxy_wrapper() {
  mkdir -p "$WRAP_DIR" || die "mkdir wrapper failed"
  mkdir -m 777 -p "$TARGET_DIR/logs" || die "mkdir logs failed"

  cat > "$WRAP_MAIN" <<EOF
#!/bin/bash
# AMAZOFF_PATCH_VERSION=$PATCH_VERSION
exec >logs/patch_out.log 2>logs/patch_err.log
echo "AmazOff Wrapper $PATCH_VERSION"
echo "\$(date): called with \$@"

toast() { 
  luna-send-pub -n 1 luna://com.webos.notification/createToast \ "{\"message\":\"\$1\", \"iconUrl\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/amazoff.png\", \"sourceId\":\"com.amazoff.patcher\"}" >/dev/null 2>&1 
}

echo "Loading AmazOff Proxy..."
toast "Loading AmazOff Proxy..."

RESP=\$(luna-send-pub -n 1 luna://org.webosbrew.hbchannel.service/spawn \
  "{\"command\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/tools/mitm/mitm $BASE/logs\"}")
case "\$RESP" in
  *'"returnValue":true'*)
    # success
    echo "Triggered AmazOff Proxy"
    ;;
  *)
    # failure
    echo "Failed to trigger. Check out $BASE/logs/mitm.log"
    toast "Failed to trigger. Check out $BASE/logs/mitm.log"
    ;;
esac

TARGET="\${0/$WRAP_NAME/ignition}"
[ "\$TARGET" = "\$0" ] && TARGET="bin/ignition"

exec \$TARGET $TCF --http-proxy-server=http://127.0.0.1:8998 \$@ >logs/amz_out.log 2>logs/amz_err.log

EOF

  chmod 755 "$WRAP_MAIN" 2>/dev/null || true
  log "generated proxy-mitm-wrapper for target app"
}

patch_appinfo_main() {
  if grep -q "\"main\"[[:space:]]*:" "$APPINFO"; then
    sed 's#"main"[[:space:]]*:[[:space:]]*"[^"]*"#"main":"'"$WRAP_MAIN_REL"'"#' "$APPINFO" > "$APPINFO.tmp" || die "sed failed"
    mv "$APPINFO.tmp" "$APPINFO" || die "write appinfo failed"
    log "Successfully patched appinfo"
    restart sam
    log "Restarted sam"
  else
    die "appinfo.json has no main key. Aborted"
  fi
}

restore_appinfo() {
  [ -f "$APPINFO_BAK" ] || die "no backup at $APPINFO_BAK"
  cp "$APPINFO_BAK" "$APPINFO" || die "restore appinfo failed"
  [ -f "$APPINFO_BAK" ] && rm "$APPINFO_BAK"
  log "restored appinfo"
  restart sam
  log "Restarted sam"
}

do_patch() {
  require_root
  [ -f "$APPINFO" ] || die "missing appinfo: $APPINFO"
  log "target=$TARGET_DIR"
  if ! [ -f "$APPINFO_BAK" ]; then
    cp "$APPINFO" "$APPINFO_BAK" || die "backup appinfo failed"
    log "backup original appinfo into $APPINFO_BAK"
  fi
  generate_wrapper
  patch_appinfo_main
  log "Successfully patched"
}

do_proxy_patch() {
  require_root
  generate_proxy_wrapper
  log "Successfully proxy-patched"
}

do_unpatch() {
  require_root
  log "unpatch started: target=$TARGET_DIR"
  restore_appinfo
  rm -f "$WRAP_MAIN" 2>/dev/null
  rmdir "$WRAP_DIR" 2>/dev/null || true
  rmdir "$TARGET_DIR/logs" 2>/dev/null || true
  log "removed wrapper"
  log "Successfully unpatched"
}

patch_status_log() {
  local patched=false
  local patch_version_installed=""
  local repatch_needed=false

  local target_logs="$TARGET_DIR/logs"
  local patcher_appinfo="/media/developer/apps/usr/palm/applications/$APP_ID/appinfo.json"
  local patcher_version=""
  [ -f "$patcher_appinfo" ] && patcher_version="$(grep -m1 '"version"' "$patcher_appinfo" | sed 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/')"


  # patched marker: target appinfo main points to bin/prox and wrapper exists
  if [ -f "$APPINFO" ] && [ -f "$WRAP_MAIN" ]; then
    if grep -q '"main"[[:space:]]*:[[:space:]]*"bin/prox"' "$APPINFO"; then
      patched=true
    fi
  fi

  if [ "$patched" = true ]; then
    patch_version_installed="$(grep -m1 '^# AMAZOFF_PATCH_VERSION=' "$WRAP_MAIN" 2>/dev/null | sed 's/^# AMAZOFF_PATCH_VERSION=//')"
    if [ -z "$patch_version_installed" ] || [ "$patch_version_installed" != "$PATCH_VERSION" ]; then
      repatch_needed=true
    fi
  fi

  log "---- STATUS ----"
  log "patcher version: ${patcher_version:-unknown}"
  if [ "$patched" = true ]; then
    log "patched: YES"
  else
    log "patched: NO"
  fi
  if [ "$patched" = true ]; then
    if [ "$repatch_needed" = true ]; then
      log "!!!!!! REPATCH NEEDED !!!!!!!"
      log "available Patch Version: ${PATCH_VERSION:-unknown}"
    fi
    log "installed Patch Version: ${patch_version_installed:-none}"
  fi
  log ""
  log "---- INFO ----"
  log "targetAppName: $TARGET_APP_NAME"
  log "targetAppDir: $TARGET_DIR"
  log "targetAppinfo: $APPINFO"
  log "wrapper: $WRAP_MAIN"
  log ""
  log "---- LOGS ----"
  log "patcherLog: $LOG"
  log "nginxAccessLog: $BASE/logs/access.log"
  log "targetLogsDir: $target_logs"
  if [ "$patched" = true ]; then
    [ -f "$target_logs/patch_out.log" ] && log "found $target_logs/patch_out.log"
    [ -f "$target_logs/patch_err.log" ] && log "found $target_logs/patch_err.log"
    [ -f "$target_logs/amz_out.log" ] && log "found $target_logs/amz_out.log"
    [ -f "$target_logs/amz_err.log" ] && log "found $target_logs/amz_err.log"
  fi
  log ""
  log "---- Backups ----"
  log "appinfoBak: $BASE/appinfo.json.bak"
  [ -f "$BASE/appinfo.json.bak" ] && log "appinfo backup present"
  log "hostsBak: $BASE/hosts.bak"
  [ -f "$BASE/hosts.bak" ] && log "hosts backup present"

  cp $LOG $BASE/patcher_state.log
  log "Saved to $BASE/patcher_state.log"
}