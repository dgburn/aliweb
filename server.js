var http = require('http')
var fs = require('fs')

var httpServer = http.createServer(function(req, res) {
  var url = req.url === '/' ? 'index.html' : req.url

  fs.readFile(`./${url}`, 'utf-8', function(err, data) {
    if (err) {
      res.write('404,您访问的页面不存在')
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

var httpServer = http.createServer(function(req, res) {
  var url = req.url === '/weapp-cropper-preview/' ? 'index.html' : req.url

  fs.readFile(`./${url}`, 'utf-8', function(err, data) {
    if (err) {
      res.write('404,您访问的页面不存在')
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

httpServer.listen(3000)