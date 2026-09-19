#!/bin/sh
set -eu

ROOT_DIR="$(CDPATH= cd -- "$(dirname "$0")/../.." && pwd)"
PATCH="$ROOT_DIR/resources/amazon/patch/ATVUnfPlayerBundle.js"
MANIFEST="$ROOT_DIR/resources/amazon/patch/manifest.json"

node --check "$PATCH"
node -e 'const fs=require("fs"), crypto=require("crypto"); const m=JSON.parse(fs.readFileSync(process.argv[1],"utf8")); const got=crypto.createHash("sha256").update(fs.readFileSync(process.argv[2])).digest("hex"); if(got!==m.patchedSha256) throw new Error(`patched hash mismatch: ${got}`); console.log(`Release bundle validated: ${got}`);' "$MANIFEST" "$PATCH"
