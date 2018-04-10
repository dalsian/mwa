var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var msg;
  MongoClient.connect('mongodb://guest:guest@ds061288.mlab.com:61288/aquarius', (err, client)=>{
    if(err) throw err;
    const db = client.db('aquarius');

    msg = db.collection('homework7')
            .find()
            .project({'message':1})
            .toArray((err, list) =>{
              let obj = list[0];
              let decipher = crypto.createDecipher('aes256','asaadsaad');
              let decrypted = decipher.update(obj.message, 'hex', 'utf8');
              decrypted += decipher.final('utf8');
              
              res.render('secret', { title: 'Secret Page' , 
                      message : decrypted});
              
              client.close;
            });
    });
});

module.exports = router;
