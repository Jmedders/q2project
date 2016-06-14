var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  console.log(req.session.user_id);
  res.render("index", {});
  // res.render('index', {user: {user_id: 0, name: "Paul McCartney"}}); // pretend user auth
});

module.exports = router;
