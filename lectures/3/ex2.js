let http = require('http');
let server = http.createServer();
const fs = require('fs');

server.on('request', function(req, res) {
    const src = fs.createReadStream('/img.jpg');
    res.writeHead(200, {
        'Content-Type': 'image.jpg'
    });
    src.pipe(res);
});

server.listen(4000);