// 引入路由方法
var handler = require('./routes/requestHandler');
var methods = handler.methods;

// 创建路由
var express = require('express');
var app = express();

// 配置路由
app.use('/',express.static('./app'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/' + 'app/index.html');
});

app.get('/upload', methods.upload);


exports.route = app;
