var assert = require('assert');
var stream = require('stream');
var util = require('util');
var JSONStream = require('JSONStream');
var NatStream = require('./streams/natural_numbers');
var DblStream = require('./streams/double');

function log (prefix) {
  return function (x) {
    console.log(prefix + ': ' + x);
  }
}

var nat = new NatStream(log('NaturalNumbers'));
var dbl = new DblStream(log('Double'));

nat
  .pipe(dbl)
  .pipe(JSONStream.stringify())
  .pipe(process.stdout)
  ;
