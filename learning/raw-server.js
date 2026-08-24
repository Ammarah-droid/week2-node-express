const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') { //manual route check
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!'); //send body and close
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found'); //basic error
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});