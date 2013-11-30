var assert = require('assert');
TEST_DB_PATH = 'test.db';
var levelup = require('levelup');
var db = levelup(TEST_DB_PATH, { valueEncoding: 'json' });

function callback (test_functions) {
  return function () {
    var args = arguments;
    test_functions.forEach(function (test_function) {
      test_function.apply(this, args);
    });
  }
}

function test_put_get () {
  db.put('key', { a: 1, b: 2 });
  db.get('key', callback(
    [ cb_err_is_null
    , cb_value_is_same_as_stored
    ]
  ));
}

function cb_err_is_null (err, value) {
  assert.equal(null, err);
}

function cb_value_is_same_as_stored (err, value) {
  assert.equal(
    JSON.stringify({ a: 1, b: 2 })
  , JSON.stringify(value)
  );
}

test_put_get();
