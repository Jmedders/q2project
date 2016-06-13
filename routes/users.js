var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post("/signup", (req, res, next) => {

  var password = bcrypt.hashSync(req.body.password, 8);
  knex('users').where({user_name: req.body.username})
  .then(function(data){
    if(data.length > 0){
      res.locals.error = "Username is taken";
      res.redirect('/');
    }
    else{
    knex('users').insert({
      user_name: req.body.username.toLowerCase(),
      password: password
    }).returning('id').then(function(id){
      res.redirect('/');
    }).catch(function(err){
      next(err);
    })
    }
  }).catch(function(err){
    next(err);
  })
});

router.post("/signin", (req, res, next) => {
  knex('users')
  .where({user_name: req.body.username.toLowerCase()})
  .first()
  .then(function(data){
    if(!data){
      res.locals.error = "user does not exist!";
      res.redirect('/')
    }
    else if(bcrypt.compareSync(req.body.password, data.password)){
      req.session.user_id = data.id;
      res.redirect('/bands')
    }
    else{
      res.redirect('/')
    }
  }).catch(function(err){
      next(err)
    })
});

router.get("/signout", (req, res, next) => {
  // clear session / cookies
  req.session.destroy(function(err){
    console.log(err);
  })

  res.redirect("/");
});




module.exports = router;
