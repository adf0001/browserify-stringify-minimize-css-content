
chcp 65001

set nodeModulesPath=../node_modules
set browserifyPath=%nodeModulesPath%/.bin/browserify

set dest=./bundle/sample-bundle.js

"%browserifyPath%" ^
	-o %dest% ^
	-v ^
	-g [ "../browserify-stringify-minimize-css-content" --appliesTo [ --includeExtensions .css --includeExtensions .css2 ] ] ^
	-g [ "%nodeModulesPath%/stringify" --extensions [.html .css .css2 ] ] ^
	-r ./sample/sample.js:sample
