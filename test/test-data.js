
//global variable, for html page, refer tpsvr @ npm.
var browserify_stringify_minimize_css_content = require("../browserify-stringify-minimize-css-content.js");
var browserify_transform_tools = require('browserify-transform-tools');
var fs = require("fs");

var sampleFile = __dirname + "/sample/sample.css";
var sampleFile2 = __dirname + "/sample/sample.css2";

module.exports = {

	"sample/css": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

		var txt = " /* fasdf */ .aa \n" +
			" { color :  red ; ;  } \n" +
			" .bb {\n" +
			" color : #aaa ; \n" +
			"   font-size: 9.000pt ; } "

		browserify_transform_tools.runTransform(browserify_stringify_minimize_css_content, sampleFile,
			{ content: txt },
			function (err, transformed) {
				if (err) { done(err); return; }

				var expect = ".aa{color:red}.bb{color:#aaa;font-size:9pt}";
				if (expect === transformed) { done(); return; }

				console.log("result: " + transformed);
				console.log("expect: " + expect);

				done("fail");
			}
		);
	},

	"sample/css2": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

		var txt = " /* fasdf */ .aa \n" +
			" { color :  red ; ;  } \n" +
			" .bb {\n" +
			" color : #aaa ; \n" +
			"   font-size: 9.000pt ; } "

		browserify_transform_tools.runTransform(browserify_stringify_minimize_css_content, sampleFile2,
			{ content: txt, config: { appliesTo: { includeExtensions: [".css2"] } } },
			function (err, transformed) {
				if (err) { done(err); return; }

				var expect = ".aa{color:red}.bb{color:#aaa;font-size:9pt}";
				if (expect === transformed) { done(); return; }

				console.log("result: " + transformed);
				console.log("expect: " + expect);

				done("fail");
			}
		);
	},

	"sample file": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

		var txt = fs.readFileSync(sampleFile);

		browserify_transform_tools.runTransform(browserify_stringify_minimize_css_content, sampleFile,
			{ content: txt },
			function (err, transformed) {
				if (err) {
					console.log(err);
					return;
				}
				console.log("----------------");
				console.log(transformed);
			}
		);

		done(false);
	},

	"sample file2": function (done) {
		if (typeof window !== "undefined") throw "disable for browser";

		var txt = fs.readFileSync(sampleFile2);

		browserify_transform_tools.runTransform(browserify_stringify_minimize_css_content, sampleFile2,
			{ content: txt, config: { appliesTo: { includeExtensions: [".css2"] } } },
			function (err, transformed) {
				if (err) {
					console.log(err);
					return;
				}
				console.log("----------------");
				console.log(transformed);
			}
		);

		done(false);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('browserify_stringify_minimize_css_content', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
