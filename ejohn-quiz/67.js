// http://ejohn.org/apps/learn/#68
assert = require('assert');

function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a method to the Ninja prototype which
// returns itself and modifies swung

Ninja.prototype.swing = function () {
  this.swung = false;
  return this;
}

assert( !ninjaA.swing().swung, "Verify that the swing method exists and returns an instance." );
assert( !ninjaB.swing().swung, "and that it works on all Ninja instances." );
