#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
function option(name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : fallback;
}

const sourcePath = option("--source");
const outputPath = option("--output", path.resolve(__dirname, "../../resources/amazon/patch/ATVUnfPlayerBundle.js"));
const manifestPath = option("--manifest", path.resolve(__dirname, "../../resources/amazon/patch/manifest.json"));
const identityPath = option("--identity", path.resolve(__dirname, "../../resources/amazon/patch/identity.conf"));
const sourceUrl = option(
  "--source-url",
  "https://cloudfront.xp-assets.aiv-cdn.net/family/lg/ATVUnfPlayerBundle-1.0/onebox1/js/ATVUnfPlayerBundle.js"
);
const expectedSourceSha = option("--expected-source-sha", process.env.AMAZOFF_EXPECTED_SOURCE_SHA256 || "");

if (!sourcePath) {
  console.error("usage: build-patch.js --source FILE [--output FILE] [--manifest FILE] [--identity FILE]");
  process.exit(2);
}

let source = fs.readFileSync(sourcePath, "utf8");
const sourceBytes = Buffer.byteLength(source);
const sourceSha256 = crypto.createHash("sha256").update(source).digest("hex");
if (expectedSourceSha && sourceSha256 !== expectedSourceSha) {
  throw new Error(`upstream bundle hash changed: expected ${expectedSourceSha}, got ${sourceSha256}`);
}

function replaceOnce(label, before, after) {
  const count = source.split(before).length - 1;
  if (count !== 1) throw new Error(`${label}: expected one anchor, got ${count}`);
  source = source.replace(before, after);
}

function replaceRegexOnce(label, expression, replacement) {
  const count = source.match(expression)?.length || 0;
  if (count !== 1) throw new Error(`${label}: expected one structural anchor, got ${count}`);
  source = source.replace(expression, replacement);
}

function replaceRegexAll(label, expression, replacement) {
  const count = source.match(expression)?.length || 0;
  if (count < 1) throw new Error(`${label}: expected at least one structural anchor, got ${count}`);
  source = source.replace(expression, replacement);
}

replaceRegexOnce(
  "no-ads flag",
  /"use strict";var [A-Za-z_$][\w$]*="undefined"!=typeof globalThis\?globalThis:"undefined"!=typeof window\?window:"undefined"!=typeof global\?global:"undefined"!=typeof self\?self:\{\};function e\(e\)\{/,
  (match) => match.replace("function e(e){", "var __HOMEBREW_NOADS=!0;function e(e){")
);

replaceRegexOnce(
  "pre-roll resolver",
  /e\.prototype\.resolvePreRollPeriods=freeOnUnref\(function\(n\)\{var r=this;/,
  (match) => match.replace("var r=this;", "if(__HOMEBREW_NOADS)return Ih.Promise.resolve([]);var r=this;")
);

replaceRegexOnce(
  "pre-roll playlist lookup",
  /e\.prototype\.getPreRollPlaylistItem=freeOnUnref\(function\(\)\{return/,
  (match) => `${match}__HOMEBREW_NOADS?null:`
);

replaceRegexOnce(
  "pre-roll period construction",
  /e\.prototype\.createPreRollPlaylistedPeriods=freeOnUnref\(function\(e\)\{var t=this,n=e\.playlist;/,
  (match) => match.replace("var t=this,n=e.playlist;", "if(__HOMEBREW_NOADS)return [];var t=this,n=e.playlist;")
);

replaceRegexOnce(
  "pre-roll state",
  /this\.hasPrerollAdBreak="Remote"===this\.playlistedPlaybackUrls\.intraTitlePlaylist\[0\]\.type;/,
  "this.hasPrerollAdBreak=!1;"
);

replaceRegexAll(
  "ad-break resolver",
  /e\.prototype\.resolveWithAdBreaks=freeOnUnref\(function\(e,t\)\{var n=this;if\(0===t\.length\)return ([A-Za-z_$][\w$]*)\.Promise\.resolve\(\[\]\);/g,
  (match, promiseName) => match.replace(`if(0===t.length)return ${promiseName}.Promise.resolve([]);`, `if(0===t.length||__HOMEBREW_NOADS)return ${promiseName}.Promise.resolve([]);`)
);

replaceRegexAll(
  "seek mapping",
  /e\.prototype\.interceptSeek=freeOnUnref\(function\(e,t,n\)\{var r=this;this\.log\.info\("Processing seek to "\+e\+"ms on timeline item index "\+t\);var i=([A-Za-z_$][\w$]*)\.translateClientTimelineToIntraTitleIndex\(t,n,this\.intraTitlePlaylist\),/g,
  (match, translatorName) => {
    const promiseName = source.slice(0, source.indexOf(match)).match(/([A-Za-z_$][\w$]*)\.Promise\.resolve\(\[\]\)/g)?.at(-1)?.match(/^([A-Za-z_$][\w$]*)\./)?.[1] || "Ih";
    return match.replace(
      `var i=${translatorName}.translateClientTimelineToIntraTitleIndex(t,n,this.intraTitlePlaylist),`,
      `if(__HOMEBREW_NOADS)return ${promiseName}.Promise.resolve(${translatorName}.translateClientTimelineIndexToXpPlaylistIndex(t,n,this.playlistEngine));var i=${translatorName}.translateClientTimelineToIntraTitleIndex(t,n,this.intraTitlePlaylist),`
    );
  }
);

replaceRegexOnce(
  "playlist filtering",
  /this\.reportIntraTitlePlaylistPlaylistCustomMetadata\(this\.playlistedPlaybackUrls\),this\.reportTokenAuthCustomMetadata\(\)\}return e\.prototype\.getStorageAccess=/,
  (match) => match.replace(
    "this.reportTokenAuthCustomMetadata()}return",
    "this.reportTokenAuthCustomMetadata();if(__HOMEBREW_NOADS){this.rawIntraTitlePlaylist=this.playlistedPlaybackUrls.intraTitlePlaylist;this.intraTitlePlaylist=this.intraTitlePlaylist.filter(freeOnUnref(function(e){return\"Main\"===e.type}))}}return"
  )
);

replaceOnce(
  "cached ad detection",
  "null!=r&&(l.hasAds=l.detectAdContentFromEXPL(r),l.cacheTtlMs=l.getMinCachingTTLFromEXPL(r))}else l.hasAds=l.detectAdContentFromPrs(l.prsResolverContentBaseResources),l.cacheTtlMs=l.getCachingTTLFromPrs(l.prsResolverContentBaseResources);",
  "null!=r&&(l.hasAds=__HOMEBREW_NOADS?!1:l.detectAdContentFromEXPL(r),l.cacheTtlMs=l.getMinCachingTTLFromEXPL(r))}else l.hasAds=__HOMEBREW_NOADS?!1:l.detectAdContentFromPrs(l.prsResolverContentBaseResources),l.cacheTtlMs=l.getCachingTTLFromPrs(l.prsResolverContentBaseResources);"
);

replaceRegexAll(
  "manifest cache",
  /u\.prototype\.cacheEXPLManifest=freeOnUnref\(function\(t\)\{var n=this;if\(!this\.hasMinimumCacheLevel\(([A-Za-z_$][\w$]*)\.CacheLevel\.DATA_SAVER\)\|\|this\.isContentLiveStreaming\(\)\|\|this\.isContentLiveLinear\(\)\)/g,
  (match) => match.replace("var n=this;", "var n=this;if(__HOMEBREW_NOADS)return Ih.Promise.resolve();")
);

replaceRegexAll(
  "fragment cache",
  /u\.prototype\.cacheEXPLFragments=freeOnUnref\(function\(\)\{return!this\.hasMinimumCacheLevel\(([A-Za-z_$][\w$]*)\.CacheLevel\.MAX\)\|\|this\.isContentLiveStreaming\(\)\|\|this\.isContentLiveLinear\(\)\?/g,
  (match) => match.replace("return!this.hasMinimumCacheLevel", "return __HOMEBREW_NOADS||!this.hasMinimumCacheLevel")
);

const patchedBytes = Buffer.byteLength(source);
const patchedSha256 = crypto.createHash("sha256").update(source).digest("hex");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.mkdirSync(path.dirname(identityPath), { recursive: true });
fs.writeFileSync(outputPath, source);

const manifest = {
  patchRevision: 2,
  sourceUrl,
  sourceBytes,
  sourceSha256,
  patchedBytes,
  patchedSha256,
  routeVariants: ["onebox1", "wave1", "wave2", "wave3", "wave4"],
  generatedAt: new Date().toISOString()
};
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync(identityPath, `add_header X-AmazOff-Source-Sha "${sourceSha256}";\nadd_header X-AmazOff-Patch-Sha "${patchedSha256}";\n`);
console.log(JSON.stringify(manifest, null, 2));
