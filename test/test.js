var test = require('tap').test;
var through = require('through');

var createReservoirStream = require('../reservoir-stream');

function createArrayStream() {
	var array = [];
	return through(
		function write(data) {
			array.push(data);
		},
		function end() {
			this.emit('end', array);
		}
	);
}

test('few input elements', function(t) {
	var rs = createReservoirStream(5);
	var inputStream = through();
	var arrayStream = createArrayStream();
	arrayStream.once('end', function(array) {
		t.equal(array.length, 3);
		t.end();
	});
	inputStream.pipe(rs).pipe(arrayStream);
	[
		'one', 'two', 'three'
	].forEach(function(data) {
		inputStream.write(data);
	});
	inputStream.end();
});

test('many input elements', function(t) {
	var rs = createReservoirStream(5);
	var inputStream = through();
	var arrayStream = createArrayStream();
	arrayStream.once('end', function(array) {
		t.equal(array.length, 5);
		t.end();
	});
	inputStream.pipe(rs).pipe(arrayStream);
	[
		'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
	].forEach(function(data) {
		inputStream.write(data);
	});
	inputStream.end();
});