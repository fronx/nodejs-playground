var NeDB = require('nedb');
var errors = require('./lib/error_handlers');

var DbErdapfel = function (path, schema)
{
  this.path = path || DEFAULT_PATH;
  this.nedb = new NeDB(
    { filename: this.path
    , autoload: true
  });
  this.nedb.ensureIndex(
    { fieldName: 'start_time'
    , unique: true
    },
    errors.log
  );
  return this;
}

DbErdapfel.prototype.store = function (erdapfel) {
  // if there is an active erdapfel, stop it
  // create a new one
  this.nedb.insert(erdapfel.data, function (err, newDoc) {
    if (err) errors.log;
  });
}

DbErdapfel.prototype.active = function (now) {
  now || Date.now()
}

module.exports = DbErdapfel;
