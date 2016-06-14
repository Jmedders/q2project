var express = require('express'),
  router = express.Router(),
  knex = require('../db/knex'),
  getBandData = require("../temp.js").getBandData; // This is just for getting the mock data.

router.get('/', (req, res) => {
  knex('users').where('facebook_id', req.session.passport.user.id).then(data => {
    req.session.user_name = data[0]['user_name'];
    req.session.user_id = data[0]['id'];
    res.locals.user = {name: req.session.user_name , user_id: req.session.user_id, bands: [getBandData(0)]};
    res.render('bands', {bands: [getBandData(0)]});
  });
});

router.get('/:band_id', (req, res) => {
  var data = getBandData(req.params.band_id); // Get data from id.
  if(/*user is admin of band*/true) data.isAdmin = true;
  res.render('band', {});
});

module.exports = router;
