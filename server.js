
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

app.use(function *(next) {
    console.log(this.query)
    var token = config.wechat.token
    var signature = this.query.signature
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr
    var str = [token, timestamp, nonce].sort().join('')
    var sha = sha1(str)

    if (sha === signature) {
        this.body = echostr + ''
    } else {
        this.body = 'wrong'
    }
	return this.body
})

app.listen(80)

console.log('Listening 80')
