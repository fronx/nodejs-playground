assert = require('assert');

function Person(){}
Person.prototype.getName = function(){
  return this.name;
};

// Implement a function that inherits from Person
// and sets a name in the constructor
function Me () {
  this.name = 'fronx';
}

// Me.prototype = Person.prototype; // works
Me.prototype = new Person();        // also works

var me = new Me();
assert( me.getName() == 'fronx', "A name was set." );
