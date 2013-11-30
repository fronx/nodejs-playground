var assert = require('assert');
TEST_DB_PATH = 'test.db';
var levelup = require('levelup');
var db = levelup(TEST_DB_PATH, { valueEncoding: 'json' });
var test = require('../lib/test.js');

[ function test_put_get () {
    db.put('key', { a: 1, b: 2 });
    db.get('key', test.callbacks([
      function (err, value) {
        assert.equal(null, err);
      },
      function (err, value) {
        assert.equal(
          JSON.stringify({ a: 1, b: 2 })
        , JSON.stringify(value)
        );
      }
    ]));
  }
].forEach(test.run);
