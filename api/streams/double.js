var stream = require('stream');
var util = require('util');

function Double (logFn) {
  stream.Transform.call(this, {objectMode: true});
  this.on('error', logFn);
}
util.inherits(Double, stream.Transform);

Double.prototype._transform = function (chunk, enc, callback) {
  this.push('' + chunk * 2);
  callback();
}

module.exports = Double;
