var stream = require('stream');
var util = require('util');

function NaturalNumbers (logFn) {
  stream.Readable.call(this, {objectMode: true});
  this.n = 1;
  this.max = 100;
  this.on('error', logFn);
}
util.inherits(NaturalNumbers, stream.Readable);

NaturalNumbers.prototype._read = function () {
  if (this.n <= this.max) {
    this.push(this.n++);  }
  else                    {
    this.push(null);      }
}

module.exports = NaturalNumbers;
