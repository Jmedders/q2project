var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

router.post("/signup", (req, res, next) => {
    var path = req.body.path,
        password = bcrypt.hashSync(req.body.password, 8);
    knex('users').where({
            user_name: req.body.username
        })
        .then(function(data) {
            if (data.length > 0) {
                res.locals.error = "Username is taken";
                res.redirect('/' + path);
            } else {
                knex('users').insert({
                    user_name: req.body.username.toLowerCase(),
                    password: password,
                    display_name: req.body.username.toLowerCase()
                })
                .returning(['id', 'user_name'])
                .then(function(data) {
                    req.session.user_id = parseInt(data[0].id);
                    req.session.display_name = data[0].user_name;
                    res.redirect('/' + path);
                }).catch(function(err) {
                    next(err);
                })
            }
        }).catch(function(err) {
            next(err);
        })
});


router.post("/signin", (req, res, next) => {
    var path = req.body.path;
    knex('users')
        .where({
            user_name: req.body.username.toLowerCase()
        })
        .first()
        .then(function(data) {
            if (!data) {
                res.locals.error = "user does not exist!";
                res.redirect('/' + path)
            } else if (bcrypt.compareSync(req.body.password, data.password)) { // Successful password validation
                req.session.user_id = data.id;
                req.session.display_name = data.display_name;
                res.redirect("/" + path)
            } else {
                res.redirect('/' + path);
            }
        }).catch(function(err) {
            next(err)
        })
});

router.get("/signout/:path", (req, res) => {
  req.session.destroy(err => console.log(err));
  res.redirect("/" + req.params.path);
});

router.get("/signout/bands/:path", (req, res) => {
  req.session.destroy(err => console.log(err));
  res.redirect("/bands/" + req.params.path);
});

router.get("/signout", (req, res, next) => {
    // clear session / cookies
    req.session.destroy(err => console.log(err));
    res.redirect("/");
});




module.exports = router;
