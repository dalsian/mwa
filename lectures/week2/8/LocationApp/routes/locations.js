var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const connStr = "mongodb+srv://guest:guest@cluster0-twzyw.mongodb.net/mwa";

/* GET users listing. */
router.get('/', function(req, res, next) {

  MongoClient.connect(connStr,(err, client)=> {
    const db = client.db("mwa");
    db.collection("locations").find().toArray((err,docs) =>{

      client.close();
      console.log(docs);
      return res.render("locations", {title: "Locations", locations: docs});
    
    });
    
  });

});

router.get('/search', (req,res,next) =>{
  const maxDist = 200000;
  const origin = [-91.96813211639335,41.01808426370002];
  MongoClient.connect(connStr, (err, client) => {
    const db = client.db("mwa");
  
    db.collection('locations')
      .find({'map':{$near:{$geometry:{type:'Point', coordinates:origin},
                          $maxDistance:maxDist}}})
      .map(loc=>{
        console.log(">>>>>>>>>>>>>>");
        console.log(loc.name);
        loc.displacement = Math.sqrt(
                              Math.abs(
                                Math.pow(Math.abs(origin[0]-loc.map.coordinates[0]),2) -
                                Math.pow(Math.abs(origin[1]-loc.map.coordinates[1]),2)
                              )
                            );
        return loc;
      })
      .sort({displacement:1})
      .limit(3)
      .toArray((err, docs)=>{
          if(err){
            console.log("...............................");
            console.log(err);
            console.log("...............................");
            throw err;
          } else {
            console.log("...............................");
            console.log(docs);
            console.log("...............................");
          }
          res.render('location_search', {title:'Search Nearest', locations: docs});
      });
  });
  
});

router.get('/add', function(req, res, next) {
  res.render('location_add', {title:'Add Location'});
});

router.post('/add', function(req,res,next) {

  console.log(req.body.txtLocName);
  MongoClient.connect(connStr, (err, client) => {
    if(err) throw err;

    const db = client.db("mwa");
    db.collection("locations").insert({
      name: req.body.txtLocName,
      category: req.body.txtLocCat,
      map: {
        type:'Point',
        coordinates: [parseFloat(req.body.lon),parseFloat(req.body.lat)]
      } 
    }, (err,doc)=>{
      console.log(err);
      console.log(doc);

      client.close();
      res.redirect("/locations");
    });
  });
});

router.delete("/", (req,res,next) =>{
  
});

module.exports = router;
