import { createServer } from 'http';

const PORT = 3001;

const server = createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Test server is running on port 3001\n');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server running at http://localhost:${PORT}/`);
  console.log('Try accessing this from your browser');
});

// Keep the server running
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close();
  process.exit(0);
});