var stream = require('stream');
var util = require('util');

function log (x) { console.log(x) }

function NaturalNumbers () {
  stream.Readable.call(this, {});
  this.n = 1;
  this.max = 100;
  this.on('error', log);
}

NaturalNumbers.prototype = stream.Readable.prototype;

NaturalNumbers.prototype._read = function () {
  if (this.n <= this.max)             {
    this.push('' + this.n++ + ',');   }
  else                                {
    this.push(null);                  }
}

function Double () {
  stream.Transform.call(this, {});
  this.on('error', log);
}

util.inherits(Double, stream.Transform);

Double.prototype._transform = function (chunk, enc, callback) {
  _this = this;
  var numStrings = chunk.toString().split(',');
  if (numStrings[numStrings.length - 1] == '')
    numStrings.pop();
  numStrings.forEach(function (numString) {
    _this.push(' ' + (parseInt(chunk) * 2));
  });
  callback();
}

var nat = new NaturalNumbers();
nat
  .pipe(new Double())
  .pipe(process.stdout)
  ;
