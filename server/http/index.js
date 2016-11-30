var server = require('./server');
var router = require('./router');
var handler = require('./requestHandler');

server.startServer(router.route, handler.handle);
