var express = require('express');
var user_service = require('../services/user_service');
var router = express.Router({caseSensitive: true});

/* GET users listing. */
router.get('/promise', function(req, res, next) {
  user_service.getUsersPromise((err, data)=>{
    if (!err) {
      const userList = data;
      return res.render('users', { title: 'Users by Promise', users: userList});
    } else {
      return res.send("Oops... something's wrong.");
    }
  });
  
});

router.get('/observable', function(req, res, next) {
  user_service.getUserObservable((err, data)=>{
    if (!err) {
      const userList = data;
      return res.render('users', { title: 'Users by Observable', users: userList});
    } else {
      return res.send("Oops... something's wrong.");
    }
  });
});

router.get('/async', function(req, res, next) {
    user_service.getUserAsync((err, data)=>{
      if (!err) {
        const userList = data;
        return res.render('users', { title: 'Users by Async/Await', users: userList});
      } else {
        return res.send("Oops... something's wrong.");
      }
    });
});

module.exports = router;
