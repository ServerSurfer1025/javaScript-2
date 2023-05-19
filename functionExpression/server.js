const http = require("http");

function onRequest(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("server has started. Hello World");
  res.end();
}

http.createServer(onRequest).listen(8000);
