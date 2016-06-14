var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex')
    // getBandData = require("../temp.js").getBandData; // This is just for getting the mock data.

router.get('/', (req, res) => {
    var bands = [];

    knex('bands')
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                bands.push({
                    name: data[i].band_name,
                    band_id: data[i].id
                });
            }
            res.render('bands', { // Render bands page with bands array
                bands: bands
            });
        })

});

router.get('/:band_id', (req, res) => {
    // var data = getBandData(req.params.band_id); // Get data from id.

    var members = [];

    knex('bands')
        .innerJoin('users_bands', 'users_bands.bands_id', 'bands.id')
        .innerJoin('users', 'users_bands.users_id', 'users.id')
        .where('bands.id', req.params.band_id)
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                members.push({
                    name: data[i].display_name
                });
            }
            res.render('band', {
                members: members
            });
        });

    // if ( /*user is admin of band*/ true) data.isAdmin = true;
});

module.exports = router;
