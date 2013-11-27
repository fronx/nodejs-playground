assert = require('assert');

var count = 0;
for ( var i = 0; i < 4; i++ ) (function(i) {
  setTimeout(function (){
    assert( i == count++, "Check the value of i." );
  }, i * 200)
})(i);
