var tmp = require('temporary');
var rimraf = require('rimraf');

var run = function (fn)  {
  return fn.call();
}

var with_temp_dir = function (fn) {
  var dir = new tmp.Dir();
  var cleanup = function () {
    rimraf(dir.path, function (err) {
      if (err) {
        console.error(err);
      }
    });
  };
  fn.call(this, dir.path);
  // process.on('exit', cleanup);
}

module.exports.run           = run;
module.exports.with_temp_dir = with_temp_dir;
