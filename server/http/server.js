var http = require('http');

function startServer(route, handle) {

  function onRequest(request, response) {
    var postData = '';
    console.log('Request received');

    request.setEncoding('utf-8');
    request.addListener('data',function(postDataChunk){
      postData += postDataChunk;
      console.log(postDataChunk);
    })
    request.addListener('end',function(){
      route(handle, request, response, postData);
    })
  }

  http.createServer(onRequest).listen(8888);

  console.log('Server started...');
}

exports.startServer = startServer;
