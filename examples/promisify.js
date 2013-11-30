var Promise = require('promise');

var times2 = function (x, cb) {
  cb(x * 2);
}

times2(4, function(x) { console.log(x); });

var t2 = Promise.denodeify(times2);

t2(3).then(
  function (x) { console.log(x); }
, function (err) { console.log(err); }
);
