#!/bin/sh
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
SOURCE_FILE="${1:-}"
if [ -z "$SOURCE_FILE" ]; then
  echo "usage: test-patch.sh UPSTREAM_BUNDLE.js" >&2
  exit 2
fi

MANIFEST="$ROOT_DIR/resources/amazon/patch/manifest.json"
EXPECTED_SOURCE_SHA256="$(sed -n 's/.*"sourceSha256"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$MANIFEST" | head -n 1)"
TEMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/amazoff-patch-test.XXXXXX")"
trap 'rm -rf "$TEMP_DIR"' EXIT INT TERM

node "$ROOT_DIR/development/amazon/build-patch.js" \
  --source "$SOURCE_FILE" \
  --expected-source-sha "$EXPECTED_SOURCE_SHA256" \
  --output "$TEMP_DIR/ATVUnfPlayerBundle.js" \
  --manifest "$TEMP_DIR/manifest.json" \
  --identity "$TEMP_DIR/identity.conf" >/dev/null
node --check "$TEMP_DIR/ATVUnfPlayerBundle.js"
node -e 'const fs=require("fs"),crypto=require("crypto"); const m=JSON.parse(fs.readFileSync(process.argv[1],"utf8")); const got=crypto.createHash("sha256").update(fs.readFileSync(process.argv[2])).digest("hex"); if(got!==m.patchedSha256) throw new Error("hash mismatch"); console.log(`patch test passed: ${got}`);' "$TEMP_DIR/manifest.json" "$TEMP_DIR/ATVUnfPlayerBundle.js"
