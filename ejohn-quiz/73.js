assert = require('assert');

var ninja = (function(){
 function Ninja(){}
 return new Ninja();
})();

// Make another instance of Ninja
var ninjaB = new ninja.constructor();

assert( ninja.constructor == ninjaB.constructor, "The ninjas come from the same source." );
