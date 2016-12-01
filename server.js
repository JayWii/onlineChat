function startServer(app) {
  //创建HTTP服务
  var server = require('http').Server(app);
  //引入socket，实现客户端与服务器的实时消息推送
  var io = require('socket.io').listen(server);

  server.listen(8080);

  console.log('Server Started');

  io.on('connection',function(socket) {
    console.log('a user connected');

    socket.on('chat Msg',function(data){
      io.emit('chat Msg',data);
    });

    socket.on('disconnect',function(){
      console.log('user disconnected');
    })
  })
}

exports.startServer = startServer;
