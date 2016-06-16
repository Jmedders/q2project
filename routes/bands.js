var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex'),
    getBandData = require('../getBandData.js').getBandData;

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
        });
});

router.get('/:band_id', (req, res, next) => {
    var userId = req.session.passport ? req.session.passport.user.id : req.session.user_id || null;

    if (!userId) { // if the user is not logged in
        res.locals.isAdmin = false; // then they are NOT an admin anywhere
        next();
    } else { // otherwise, if the user is logged in
        knex('users') // check their admin status for this band
            .select('is_admin')
            .first()
            .where('users.id', 1)
            .innerJoin('users_bands', 'users_id', 'users.id')
            .innerJoin('bands', 'bands_id', 'bands.id')
            .then(data => {
                res.locals.isAdmin = data.is_admin; // and assign it to res.locals
                next();
            })
    }
});

router.get('/:band_id', function(req, res, next) {
    getBandData(req.params.band_id).then(function(data) {
      //console.log(data);
        res.render('band', {
            band: data
        });
    })
    .catch(next)
});

router.post('/:band_id', function(req, res, next) {
    // handle band updates here
});

module.exports = router;
