
// var http = require("http");
// var url = require('url')
// var fs = require('fs')

// var app = http.createServer(function (req, res) {
//   var path = url.parse(req.url).pathname
//   console.log(path)
//   const pathname = path.substr(1)
//   console.log(pathname)
//   if (pathname === 'index') {
//     fs.readFile(`${__dirname}/index.html`, (err, data) => {
//       if (err) {
//         res.writeHead(404, {
//           'Content-Type': 'text/html;charset=UTF-8'
//         })
//         res.write('read file failed')
//       } else {
//         res.writeHead(200, {
//           'Content-Type': 'text/html;charset=UTF-8'
//         })
//         res.write(data)
//       }
//       res.end()
//     })
//   } else if (pathname === 'cropper') {
//     fs.readFile(`${__dirname}/weapp-cropper-preview/index.html`, (err, data) => {
//       if (err) {
//         res.write('read file failed2')
//       } else {
//         res.writeHead(200, {
//           'Content-Type': 'text/html;charset=UTF-8'
//         })
//         res.write(data.toString())
//       }
//     })
//   }
//   // var pathname = url.parse(req.url).pathname
//   // res.writeHead(200, { "Content-type": "text/blain" });
//   // res.write("Hello NodeJs");
//   // res.end();
// })

// app.listen(4000, () => {
//   console.log('server start success in port 4000')
// })

var express = require("express");
var app = express();
 
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html')
})
// app.use(express.static("weapp-cropper-preview"));//关键是这一句，我的目录是html的目录
 
app.listen(3000, ()=>{
  console.log("服务启动成功。");
})