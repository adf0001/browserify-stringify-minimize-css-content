# browserify-stringify-minimize-css-content
For browserify stringify transform, to minimize css file content.

A pre-process tool for browserify 'stringify' transform, should be used before 'stringify'.

# Install
```
npm install browserify-stringify-minimize-css-content
```

# Usage
```bat

browserify ... ^
	-g [ browserify-stringify-minimize-css-content --minimizeExtensions [ .css ] ] ^
	-g [ stringify --extensions [.html .htm .css ] --minify true ^
		--minifyAppliesTo [ --includeExtensions [ .html .htm .css ] ] ] ^
	...

```
