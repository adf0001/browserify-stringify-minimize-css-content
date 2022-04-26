
var path = require("path");
var browserify_transform_tools = require('browserify-transform-tools');
var clean_css = require('clean-css');

module.exports = browserify_transform_tools.makeStringTransform(
	"minimize-css-content", null,
	function (content, transformOptions, done) {
		//console.log(transformOptions.config.minimizeExtensions._);
		//console.log(path.extname(transformOptions.file));
		//console.log(transformOptions.config.minimizeExtensions._.indexOf(path.extname(transformOptions.file)));

		var minimizeExtensions = transformOptions && transformOptions.config &&
			transformOptions.config.minimizeExtensions;

		//`_`: refer `subarg`/`minimist` from `browserify`
		if (minimizeExtensions && minimizeExtensions._ && (minimizeExtensions._ instanceof Array))
			minimizeExtensions = transformOptions.config.minimizeExtensions = minimizeExtensions._;	//fully replace it

		if (minimizeExtensions && minimizeExtensions.indexOf(path.extname(transformOptions.file)) >= 0) {
			//console.log(content);
			content = (new clean_css({})).minify(content).styles;
			//console.log(content);
		}

		done(null, content);
	}
);
