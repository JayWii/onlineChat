var url = require('url');

function route(handle, request, response, postData) {
  var pathName = url.parse(request.url).pathname;
  if (typeof handle[pathName] === 'function') {
    handle[pathName](response, postData);
  }else{
    console.log("No request handler found for " + pathName);
    response.writeHead(404, {'Content-type' : 'text/plain'});
    response.write('404 NOT FOUND');
    response.end();
  }
}

exports.route = route;
