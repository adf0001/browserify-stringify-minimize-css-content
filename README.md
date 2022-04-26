# browserify-stringify-minimize-css-content
For browserify stringify transform, to minimize css file content.

A pre-process tool for browserify 'stringify' transform, should be used before 'stringify'.

# Install
```
npm install browserify-stringify-minimize-css-content
```

# Usage, in command line
```bat

//defaut extension .css

browserify ... ^
	-g [ browserify-stringify-minimize-css-content ] ^
	-g [ stringify --extensions [.html .htm .css ] --minify true ^
		--minifyAppliesTo [ --includeExtensions [ .html .htm .css ] ] ] ^
	...

//or
	-g [ browserify-stringify-minimize-css-content --appliesTo [ --includeExtensions .css --includeExtensions .css2 ] ]

//or
	-g [ browserify-stringify-minimize-css-content --appliesTo [ --includeExtensions .css --includeExtensions .css ] ]

!!! NOTE: duplicated '--includeExtensions/excludeExtensions/files ...' to overcome the bug from 'browserify-transform-tools' in Windows command line.

//or in Linux shell
	-g [ browserify-stringify-minimize-css-content --appliesTo.includeExtensions [ .css .css2 ] ]

```

# Usage, in code
```javascript
var browserify_transform_tools = require('browserify-transform-tools');
var browserify_stringify_minimize_css_content = require("browserify-stringify-minimize-css-content");

browserify_transform_tools.runTransform(
	browserify_stringify_minimize_css_content,
	fileName,
	{
		content: text, 
		config: { appliesTo: { includeExtensions: [".css",".css2"] } }
	},
	...
);

```
