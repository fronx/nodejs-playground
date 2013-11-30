function log (err) { if (err) console.error(err); }
function raise (err) { throw new Error(err); }

module.exports.log = log;
module.exports.raise = raise;
