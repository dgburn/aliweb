
// var express = require("express")
// var app = express();

// // app.get('/', function(req, res, next) {
// //   res.sendFile(__dirname + '/index.html')
// // })
// app.use('/', express.static(__dirname + '/template'))
// // app.get('/', function(req, res, next) {
// //   res.sendFile(__dirname + '/template/index.html')
// // })
// app.get('/cropper', function(req, res, next) {
//   res.sendFile(__dirname + '/weapp-cropper-preview/index.html')
// })
// app.use('/cropper-static', express.static(__dirname + '/weapp-cropper-preview'))
 
// app.listen(80, function () {
//   console.log("服务启动成功。")
// })


'use strict'
const fs = require('fs');
var Koa = require('koa')

var sha1 = require('sha1')

var config = {
    wechat: {
        appID:'wx1df7c13018a86a03',
        appsecret:'cfa864d47ac233308388c5a14cd05cbe',
        token:'moti'
    }
}

var app = new Koa();


const main = ctx => {
  console.log(ctx.request.path)
  if (ctx.request.path == '/auth') {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./auth.html');
  } else if (ctx.request.path == '/') {
    console.log(ctx.request.query)
    var query = ctx.request.query
    var token = config.wechat.token
    var signature = query.signature
    var nonce = query.nonce
    var timestamp = query.timestamp
    var echostr = query.echostr
    var str = [token, timestamp, nonce].sort().join('')
    var sha = sha1(str)
    ctx.response.body = echostr + ''
	  return echostr
  }
}

app.use(main);
app.listen(80)

console.log('Listening 80')
