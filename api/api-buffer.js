assert = require('assert');

var b10 = new Buffer(10);
var len;

assert(
  b10.write('abc', 1) == 3,
  'writing to buffer returns length');

assert(
  Buffer._charsWritten == 3,
  'last write length is captured in global variable');

assert(b10.toString('utf8', 1, 4) == 'abc',
  'toString takes a format, a start index and an (excluded) end index');

// assert(
//   b10.toJSON() == [0,97,98,99,0,0,0,0,0,0],
//   "toJSON (1)");
// assert(
//   new Buffer("xyz").toJSON() == [ 120, 121, 122 ],
//   'toJSON (2)');

var b5 = new Buffer(5);
b5[0] = 97;
assert(b5[0] == 97, 'access by index');
