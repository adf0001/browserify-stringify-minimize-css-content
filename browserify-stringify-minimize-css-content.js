
var path = require("path");
var browserify_transform_tools = require('browserify-transform-tools');
var clean_css = require('clean-css');

module.exports = browserify_transform_tools.makeStringTransform(
	"minimize-css-content", null,
	function (content, transformOptions, done) {
		//console.log(transformOptions.config.minimizeExtensions._);
		//console.log(path.extname(transformOptions.file));
		//console.log(transformOptions.config.minimizeExtensions._.indexOf(path.extname(transformOptions.file)));

		//`_`: refer `subarg` from `browserify`
		if (transformOptions.config.minimizeExtensions._.indexOf(path.extname(transformOptions.file)) >= 0) {
			//console.log(content);
			content = (new clean_css({})).minify(content).styles;
			//console.log(content);
		}

		done(null, content);
	}
);
