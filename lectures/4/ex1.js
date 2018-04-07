const fs = require('fs');
const http = require('http');
const url = require('url');
const {fork} = require('child_process');

const server = http.createServer((req, res) => {
    const childProcess = fork('./readstream.js', res);
    const parsedURL = url.parse(req.url,true)
    const queryObj = parsedURL.query;
    const filePath = queryObj.url;
    //http://localhost:4000/?url=/img.jpg
    console.log(filePath);
    childProcess.send(filePath); //file name for download
    childProcess.on('message', (data) => {
        console.log('child process done...');
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.end(Buffer(data));
    });
});
server.listen(4000);