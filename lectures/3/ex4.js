let fs = require('fs');
let zlib = require('zlib');
let gunzip = zlib.createGunzip();

let readable = fs.createReadStream("zipable.txt.gz");
let decompressed = fs.createWriteStream("unzipped.txt");

readable.pipe(gunzip).pipe(decompressed);