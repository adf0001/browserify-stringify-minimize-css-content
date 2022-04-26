
var browserify_transform_tools = require('browserify-transform-tools');
var clean_css = require('clean-css');

module.exports = browserify_transform_tools.makeStringTransform(
	"minimize-css-content", { includeExtensions: [".css"] },
	function (content, transformOptions, done) {

		content = (new clean_css({})).minify(content).styles;

		done(null, content);
	}
);
