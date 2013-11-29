var Erdapfel = require('./erdapfel');
var Database = require('./db');
var user = require('./user_io');
var EventEmitter = require('events').EventEmitter;
var time = require('./arith_time');

SECOND = 1000;

var Main = function () {
  this.database = new Database();
}

Main.prototype.end_erdapfel = function (erdapfel) {
  console.log('done: ' + erdapfel.title());
};

Main.prototype.countdown = function (erdapfel) {
  return function () {
    console.log(
      time.ms_to_min_s_str(
        erdapfel.time_remaining()));

    if (erdapfel.finished()) {
      clearInterval(this.interval_handle);
      this.end_erdapfel(erdapfel);
    }
  }
}

Main.prototype.start_erdapfel = function (title) {
  var erdapfel = new Erdapfel(title);
  this.database.store_erdapfel(erdapfel);
  this.interval_handle = setInterval(this.countdown(erdapfel).bind(this), SECOND);
};

Main.prototype.run = function () {
  user.ask("what are you going to do? > ", /.+/, this.start_erdapfel.bind(this));
}

new Main().run();
