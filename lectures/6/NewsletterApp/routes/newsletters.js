var express = require('express');
var router = express.Router();
let fs = require('fs');
var csrf = require('csurf');
express().use(csrf());

router.get('/', function(req,res,next){
    return res.render('newsletters',{title: 'Newsletter Subscription'});
});

router.post('/', function(req, res, next) {
    res.locals.csrftoken = req.csrfToken;
    next();
},function(req,res,next){
    const addr = req.body.txtEmail;
    req.assert(addr, 'Please enter a valid email address').notEmpty().isEmail();
    var errors = req.validationErrors();
    if(errors) {
        return res.render('newsletters',{title:'Newsletter Subscription',
                                        errors: Array.from(new Set(errors.map(e=>e.msg)))});
    } else {
        fs.appendFileSync('resources/subscribers.txt',addr+'\n');
        return res.render('thankyou',{title:"Thank You!", email: addr});
    }
    
});


module.exports = router;