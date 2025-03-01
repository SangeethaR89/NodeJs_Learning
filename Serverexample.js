const http = require('http');

const server = http.createServer((req, res) => {
  handleRequest(req, res, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

function handleRequest(req, res, callback) {
  if (req.url === '/') {
    callback(null, 'Hello, World!');
  } else if (req.url === '/about') {
    callback(null, 'About page');
  } else {
    callback('Not found', null);
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});