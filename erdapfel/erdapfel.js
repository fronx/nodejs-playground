var Erdapfel = function (title)
{
  if (!title) throw new Error("empty titles don't count");
  this.data =
    { start_time: Date.now()
    , title: title
    , stopped: false
    }
}

DURATION = 25 * 60 * 1000;

Erdapfel.prototype.start_time = function () { return this.data.start_time; };
Erdapfel.prototype.title      = function () { return this.data.title; };
Erdapfel.prototype.time_remaining = function () {
  var diff = DURATION - (Date.now() - this.start_time());
  if (diff < 0) diff = 0;
  return diff;
};
Erdapfel.prototype.finished = function () {
  return this.time_remaining() < (DURATION - 3000);
}

module.exports = Erdapfel;
