const dns = require('dns');

dns.resolve4('www.mum.edu', function(err, ip) {
    console.log(err?err:ip);
});