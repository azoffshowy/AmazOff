npm install uglify-js@3.17.4
./node_modules/.bin/uglifyjs ATVUnfPlayerBundle_dev.js --no-annotations --keep-fargs --keep-fnames --no-rename --validate -o ./ATVUnfPlayerBundle_dist.js
echo "Written Release as ATVUnfPlayerBundle_dist.js"