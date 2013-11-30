var levelup = require('levelup')
var errors = require('./lib/error_handlers');
var Promise = require('promise');
var level_promise = require('level-promise');

var DbErdapfel = function (path, schema) {
  this.db = levelup(path, { valueEncoding: 'json' });
  level_promise(this.db);
}

DbErdapfel.prototype.key = function (erdapfel) {
  return "erdapfel\x00" + erdapfel.start_time();
}

DbErdapfel.prototype.store = function (erdapfel) {
  // if there is an active erdapfel, stop it
    // TODO
  // create a new one
  this.db.put(this.key(erdapfel), erdapfel.data());
}

DbErdapfel.prototype.active = function (now) {
  // now || Date.now()
}

module.exports = DbErdapfel;
