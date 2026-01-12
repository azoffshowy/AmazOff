wget cloudfront.xp-assets.aiv-cdn.net/family/lg/ATVUnfPlayerBundle-1.0/onebox1/js/ATVUnfPlayerBundle.js
npm install js-beautify@1.15.4
./node_modules/.bin/js-beautify ATVUnfPlayerBundle.js -o ATVUnfPlayerBundle.beauty.js
patch -i noads.patch ATVUnfPlayerBundle.beauty.js -o ATVUnfPlayerBundle_dev.js
if [ $? -eq 0 ]; then
    echo "Development version written as ATVUnfPlayerBundle_dev.js"
else
    echo "Something went wrong."
fi
rm ATVUnfPlayerBundle.beauty.js