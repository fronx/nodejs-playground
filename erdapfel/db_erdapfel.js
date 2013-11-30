var levelup = require('levelup')
var errors = require('./lib/error_handlers');

var DbErdapfel = function (path, schema) {
  this.path = path || DEFAULT_PATH;
  this.db = levelup(path, { valueEncoding: 'json' })
}

DbErdapfel.prototype.key = function (erdapfel) {
  return "erdapfel\x00" + erdapfel.start_time();
}

DbErdapfel.prototype.store = function (erdapfel) {
  // if there is an active erdapfel, stop it
  // create a new one
  this.db.put(
    this.key(erdapfel)
  , erdapfel.data()
  , function (err) {
      if (err) return console.log(err);
      // continue
    }
  );
}

DbErdapfel.prototype.active = function (now) {
  now || Date.now()
}

module.exports = DbErdapfel;
