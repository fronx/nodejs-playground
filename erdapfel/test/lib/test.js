var callbacks = function (test_functions) {
  return function () {
    var args = arguments;
    test_functions.forEach(function (test_function) {
      test_function.apply(this, args);
    });
  }
}

module.exports.callbacks = callbacks;
