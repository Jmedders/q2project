var express = require('express'),
  router = express.Router(),
  knex = require('../db/knex'),
  getBandData = require("../temp.js").getBandData; // This is just for getting the mock data.

router.get('/', (req, res) => {
    // console.log('req.session:', req.session);
    // res.locals.user = {
    //   user_id: req.session.user_id
    // };
    // console.log('res.locals.user:',res.locals.user);
    res.render('bands');
});

router.get('/:band_id', (req, res) => {
  var data = getBandData(req.params.band_id); // Get data from id.
  if(/*user is admin of band*/true) data.isAdmin = true;
  res.render('band', {});
});

module.exports = router;
