
var express = require('express')
var app = express()

var index = require('./index.html')
var cropper = require('./weapp-cropper-preview/index.html')

app.use('/', index)

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/' + 'index.html')
// })

// app.get('/weapp-cropper', function (req, res) {
//   res.sendFile(__dirname + '/weapp-cropper-preview/' + 'index.html')
// })

console.log('start success')
app.listen(3000)