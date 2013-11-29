var assert = require('assert');
var time = require('../lib/arith_time');

var now = Date.parse('2013-12-29T22:42:28+01:00')
var earlier = Date.parse('2013-12-29T22:40:00+01:00')

assert.equal(
  '2:28',
  time.ms_to_min_s_str(now - earlier));

assert.equal(
  '3:30',
  time.min_s_to_str([ 3, 30 ]));

assert.equal(
  [ 2, 28 ].toString(),
  time.ms_to_min_s(now - earlier).toString());
