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
    getBandData(req.params.band_id).then(function(data) {
      console.log(data);
      res.render('band', {data});
    })


    // if ( /*user is admin of band*/ true) data.isAdmin = true;
});

router.post('/:band_id', function(req, res, next) {
    // handle band updates here
});
module.exports = router;
