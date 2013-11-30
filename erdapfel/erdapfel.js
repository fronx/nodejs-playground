DEFAULT_DURATION = 25 * 60 * 1000;

var Erdapfel = function (title, duration, now)
{
  if (!title) throw new Error("empty titles don't count");
  this.data =
    { start_time: (now || Date.now())
    , duration: (duration || DEFAULT_DURATION)
    , title: title
    }
}

Erdapfel.prototype.start_time = function () { return this.data.start_time; };
Erdapfel.prototype.title      = function () { return this.data.title; };
Erdapfel.prototype.duration   = function () { return this.data.duration; };
Erdapfel.prototype.data       = function () { return this.data; };
Erdapfel.prototype.time_remaining = function (now) {
  var diff = this.duration() - ((now || Date.now()) - this.start_time());
  return diff < 0 ? 0 : diff;
};
Erdapfel.prototype.finished = function () {
  return this.time_remaining() <= 0;
}

module.exports = Erdapfel;
