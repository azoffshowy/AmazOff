wget "https://ign-a3cuo5fd0htnbx-8d2d2pd2-3d12d12.api.amazonvideo.com/living-room-app-vending/getAppResource?filename=8fb332d29aa5716dd6b3ee6855b23cd472562cacad3a5327863cbf6875778fd1_AppStartChunk.chunk.js&appId=2943394D118A418B8D405C54CC84062C&platform=ignition&stage=prod-mooshine&deviceTypeId=A3CUO5FD0HTNBX&deviceIdEncoded=ODFmNTZlMmFiZWVmNjU4OWVjNDVkNjNmNTg2YmVlZjEyNjVhZTEyOQ%3D%3D&apiVersion=v3#/AppStartChunk.chunk.js?" -O AppStartChunk.js
npm install js-beautify@1.15.4
./node_modules/.bin/js-beautify -w 160 AppStartChunk.js -o AppStartChunk.orig.js
patch -i noads.patch AppStartChunk.orig.js -o AppStartChunk.dev.js
if [ $? -eq 0 ]; then
    echo "Development version written as AppStartChunk.dev.js"
else
    echo "Something went wrong."
fi