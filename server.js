
var express = require("express")
var app = express();
 
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
})
app.get('/cropper', function(req, res, next) {
  res.sendFile(__dirname + '/weapp-cropper-preview/index.html')
})
app.use('/cropper-static', express.static(__dirname + '/weapp-cropper-preview'))
 
app.listen(80, function () {
  console.log("服务启动成功。")
})
