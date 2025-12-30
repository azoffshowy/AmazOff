#!/bin/sh

APPINFO="$TARGET_DIR/appinfo.json"
APPINFO_BAK="$BASE/appinfo.json.bak"
WRAP_DIR="$TARGET_DIR/bin"
WRAP_MAIN="$WRAP_DIR/prox"
WRAP_MAIN_REL="bin/prox"

TARGET_BIN="bin/ignition $TCF"

generate_wrapper() {
  mkdir -p "$WRAP_DIR" || die "mkdir wrapper failed"

  cat > "$WRAP_MAIN" <<EOF
#!/bin/bash
mkdir tmp
exec >tmp/patch_out.log 2>tmp/patch_err.log
echo "\$(date) \$@"

toast() {
  luna-send-pub -n 1 luna://com.webos.notification/createToast \
    "{\"message\":\"\$1\", \"iconUrl\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/amazoff.png\", \"sourceId\":\"com.amazoff.patcher\"}" >/dev/null 2>&1
}

toast "Loading..."

RESP=\$(luna-send-pub -n 1 luna://org.webosbrew.hbchannel.service/exec \
  "{\"command\":\"/media/developer/apps/usr/palm/applications/com.amazoff.patcher/tools/patchctl.sh trap\"}")
case "\$RESP" in
  *'"returnValue":true'*)
    # success
    ;;
  *)
    # failure
    toast "Failed to load. Check out logs."
    ;;
esac

exec $TARGET_BIN \$*

EOF

  chmod 755 "$WRAP_MAIN" 2>/dev/null || true
  log "generated proxy-wrapper for target app"
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

do_unpatch() {
  require_root
  log "unpatch started: target=$TARGET_DIR"
  restore_appinfo
  rm -f "$WRAP_MAIN" 2>/dev/null
  rmdir "$WRAP_DIR" 2>/dev/null || true
  log "removed wrapper"
  log "Successfully unpatched"
}
