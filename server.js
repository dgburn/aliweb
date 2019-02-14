
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/weapp-cropper', function (req, res) {
  res.sendFile(__dirname + '/weapp-cropper-preview/' + 'index.html')
})

app.listen(3000)