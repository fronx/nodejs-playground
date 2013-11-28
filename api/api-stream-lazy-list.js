var assert = require('assert');
var stream = require('stream');
var util = require('util');
var JSONStream = require('JSONStream');

function log (prefix) {
  return function (x) {
    console.log(prefix + ': ' + x);
  }
}

var Nat = require('./streams/natural_numbers');
var Dbl = require('./streams/double');
var nat = new Nat(log('NaturalNumbers'));
var dbl = new Dbl(log('Double'));

nat
  .pipe(dbl)
  .pipe(JSONStream.stringify())
  .pipe(process.stdout)
  ;
