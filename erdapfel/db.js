var NeDB = require('nedb');
var errors = require('./error_handlers');


DEFAULT_PATH = './.data';

var Database = function (path)
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

Database.prototype.store_erdapfel = function (erdapfel) {
  this.nedb.insert(erdapfel.data, function (err, newDoc) {
    if (err) errors.log;
  });
}

module.exports = Database;
