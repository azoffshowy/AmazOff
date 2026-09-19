#!/bin/sh
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
SOURCE_URL="${AMAZOFF_PLAYER_URL:-https://cloudfront.xp-assets.aiv-cdn.net/family/lg/ATVUnfPlayerBundle-1.0/onebox1/js/ATVUnfPlayerBundle.js}"
EXPECTED_SOURCE_SHA256="${AMAZOFF_EXPECTED_SOURCE_SHA256:-962b4c04af687d98b59ed902c6bb2985064a8a7709d029283205b77e7121327e}"
SOURCE_FILE="${1:-ATVUnfPlayerBundle.orig.js}"

if command -v curl >/dev/null 2>&1; then
  curl -fsSL "$SOURCE_URL" -o "$SOURCE_FILE"
else
  wget -q -O "$SOURCE_FILE" "$SOURCE_URL"
fi

node "$ROOT_DIR/development/amazon/build-patch.js" \
  --source "$SOURCE_FILE" \
  --source-url "$SOURCE_URL" \
  --expected-source-sha "$EXPECTED_SOURCE_SHA256" \
  --output "$ROOT_DIR/resources/amazon/patch/ATVUnfPlayerBundle.js" \
  --manifest "$ROOT_DIR/resources/amazon/patch/manifest.json" \
  --identity "$ROOT_DIR/resources/amazon/patch/identity.conf"

echo "Validated and generated AmazOff player patch."
