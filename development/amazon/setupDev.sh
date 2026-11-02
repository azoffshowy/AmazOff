# WebOS 4.x-9.x (onebox1/wave1/wave2 all serve the same current bundle)
wget cloudfront.xp-assets.aiv-cdn.net/family/lg/ATVUnfPlayerBundle-1.0/onebox1/js/ATVUnfPlayerBundle.js
# WebOS 11.x: fetch the wave3 bundle instead and beautify as ATVUnfPlayerBundle-25364.orig.js
# wget cloudfront.xp-assets.aiv-cdn.net/family/lg/ATVUnfPlayerBundle-1.0/wave3/js/ATVUnfPlayerBundle.js
npm install js-beautify@1.15.4
./node_modules/.bin/js-beautify ATVUnfPlayerBundle.js -o ATVUnfPlayerBundle.orig.js
patch -i noads.patch ATVUnfPlayerBundle.orig.js -o ATVUnfPlayerBundle.dev.js
#patch -i logging.patch ATVUnfPlayerBundle.dev.js
if [ $? -eq 0 ]; then
    echo "Development version written as ATVUnfPlayerBundle.dev.js"
else
    echo "Something went wrong."
fi