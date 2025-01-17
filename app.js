// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200: OK
  res.setHeader('Content-Type', 'text/plain'); // Set response header
  res.end('Hello, World!\n'); // Send response body
});

// The server listens on port 3000.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
