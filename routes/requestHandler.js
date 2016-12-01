// 定义路由响应的各类方法
//
function start(req, res) {
  res.send("Request handler 'start' was called.");
}

function upload(req, res) {
  res.send("Request handler 'upload' was called.");
}

var methods = {
  start : start,
  upload : upload
}

exports.methods = methods;
