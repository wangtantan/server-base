'use strict'

const http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello tanlaoshi");
  response.end();
}).listen(1111);

console.log("nodejs start listen 8888 port!");
