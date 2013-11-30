var callbacks = function (test_functions) {
  return function () {
    var args = arguments;
    test_functions.forEach(function (test_function) {
      test_function.apply(this, args);
      progress();
    });
  }
}

var progress = function () {
  process.stdout.write('.');
}

var run = function (fn)  {
  return fn.call();
}

module.exports.callbacks = callbacks;
module.exports.progress  = progress;
module.exports.run       = run;
