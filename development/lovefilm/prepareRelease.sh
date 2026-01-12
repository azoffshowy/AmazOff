npm install uglify-js@3.17.4
./node_modules/.bin/uglifyjs AppStartChunk.dev.js --no-annotations --keep-fargs --keep-fnames --no-rename --validate -o ./chunk-0.js
echo "Written Release as chunk-0.js"