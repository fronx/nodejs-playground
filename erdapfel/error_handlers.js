function log (x) { if (x) console.log(x); }
function raise (x) { throw new Error(x); }

module.exports.log = log;
module.exports.raise = raise;
