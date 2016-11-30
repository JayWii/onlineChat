var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('started');
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {'Content-type' : 'text/plain;charset=utf-8'});
  response.write('upload');
  response.end();
}

var handle = {
  '/' : start,
  '/start' : start,
  '/upload' : upload
}
exports.handle = handle;
