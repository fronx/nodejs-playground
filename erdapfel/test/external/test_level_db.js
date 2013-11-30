var assert = require('assert');
var levelup = require('levelup');
var test = require('../lib/test.js');
var Promise = require('promise');

test.with_temp_dir(function (tmp_dir) {
  var db = levelup(tmp_dir, { valueEncoding: 'json' });
  var db_put = Promise.denodeify(db.put.bind(db));
  var db_get = Promise.denodeify(db.get.bind(db));

  [
    function test_put_get () {
      var that =
        db_put('key', { a: 1, b: 2 }).then(function () {
          return db_get('key');
        });

      function test_value (value) {
        assert.equal(
          JSON.stringify({ a: 1, b: 2 })
        , JSON.stringify(value)
        );
      }

      that.done(test_value);
    }

  ].forEach(test.run);
});
