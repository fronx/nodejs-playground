var assert = require('assert');
var levelup = require('levelup');
var test = require('../lib/test.js');
var Promise = require('promise');
var level_promise = require('level-promise');

test.with_temp_dir(function (tmp_dir) {
  var db = levelup(tmp_dir, { valueEncoding: 'json' });
  level_promise(db);

  [
    function test_put_get () {
      var that =
        db.put('key', { a: 1, b: 2 }).then(function () {
          return db.get('key');
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
