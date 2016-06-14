var express = require('express'),
  router = express.Router(),
  knex = require('../db/knex'),
  getBandData = require("../temp.js").getBandData; // This is just for getting the mock data.

router.get('/', (req, res) => {
  var bands = [getBandData(0)]; // Get a list of some bands (maybe top 10).
  if(!req.session.passport) return res.render("bands", {bands: bands}); // If no user, just render.
  knex('users').where('facebook_id', req.session.passport.user.id).then(data => { // Find user with matching ID.
    if(!data.length) return res.render("bands", {bands: bands}); // If no user, just render.

    // This should be in like middleware.
    req.session.user_name = data[0]['user_name']; // Set username in session.
    req.session.user_id = data[0]['id']; // Set userid in session.

    res.locals.user = {name: req.session.user_name}; // Sets local user object.
    res.render('bands', {bands: bands});
  });
});

router.get('/:band_id', (req, res) => {
  var data = getBandData(req.params.band_id); // Get data from id.
  if(/*user is admin of band*/true) data.isAdmin = true;
  res.render('band', {});
});

module.exports = router;
