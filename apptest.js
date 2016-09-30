'use strict'

const http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  res.write("Hello 潭老师\t\n");
  console.log('get the test curl');
  res.end();
}).listen(1111);

console.log("nodejs start listen 1111 port!");
