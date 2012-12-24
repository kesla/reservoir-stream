var through = require('through');
var Reservoir = require('reservoir');

module.exports = function(size) {
    var reservoir = new Reservoir(size);
    var stream = through(
        function write(data) {
            reservoir.pushSome(data);
        },
        function end() {
            var self = this;
            reservoir.forEach(function(data) {
                self.emit('data', data);
            });
            this.emit('end');
        }
    );
    return stream;
}