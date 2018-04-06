const https = require('https');
const fs = require('fs');

let server = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./certificate.pem')
});


server.on('request', function(req, res) {
    const src = fs.createReadStream('/img.jpg');
    res.writeHead(200, {
        'Content-Type': 'image.jpg'
    });
    src.pipe(res);
});

server.listen(4000);