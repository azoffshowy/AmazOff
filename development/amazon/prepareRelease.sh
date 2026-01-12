npm install uglify-js@3.17.4
./node_modules/.bin/uglifyjs ATVUnfPlayerBundle.dev.js --no-annotations --keep-fargs --keep-fnames --no-rename --validate -o ./ATVUnfPlayerBundle.dist.js
echo "Written Release as ATVUnfPlayerBundle.dist.js"