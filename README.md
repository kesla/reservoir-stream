#reservoir-stream[![build status](https://secure.travis-ci.org/kesla/reservoir-stream.png)](http://travis-ci.org/kesla/reservoir-stream)

A streaming interface to do [reservoir sampling](http://en.wikipedia.org/wiki/Reservoir_sampling) by using the great [reservoir](https://npmjs.org/package/reservoir) module.

## installation

```
npm install reservoir-stream
```

## demo/usage
```javascript
	// use a reservoir size of 3
	var stream = require('reservoir-stream')(3)

	var inputStream.pipe(stream).pipe(outputStream)
	// 3 random elements from the inputStream will be piped to the outputStream

```