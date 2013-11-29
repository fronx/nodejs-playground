function ms_to_seconds (ms) {
  return Math.floor(ms / 1000);
}

function ms_to_min_s (ms) {
  var sec = ms_to_seconds(ms);
  var min = Math.floor(sec / 60);
  return [ min, sec % 60 ];
}

function min_s_to_str (min_s) {
  return '' + min_s[0] + ':' + min_s[1];
}

function ms_to_min_s_str (ms) {
  return min_s_to_str(ms_to_min_s(ms));
}

module.exports.ms_to_min_s     = ms_to_seconds;
module.exports.ms_to_min_s     = ms_to_min_s;
module.exports.min_s_to_str    = min_s_to_str;
module.exports.ms_to_min_s_str = ms_to_min_s_str;
