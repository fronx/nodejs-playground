var http = require('http');
var Erdapfel = require('./erdapfel');
var Db = require('./db_erdapfel');
var time = require('./lib/arith_time');

var server = http.createServer(function (request, response) {
  // var erdapfel = Db.active();
  response.writeHead(200);
  response.end('woot');
});

server.listen(process.env.PORT || 8080);
