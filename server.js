
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/weapp-cropper', function (req, res) {
  res.sendFile(__dirname + '/weapp-cropper-preview/' + 'index.html')
})

console.log('启动成功')
app.listen(3000)