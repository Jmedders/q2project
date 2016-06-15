var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

router.post('/:song_id', function(req, res, next) {
    // handle song updates
    knex('songs')
        .where('songs.id', req.params.song_id)
        .update({
            song_name: req.body.song_name,
            song_key: req.body.song_key,
            time_signature: req.body.time_signature,
            feel: req.body.feel,
            tempo: req.body.tempo
        })
        .then(function(data) {
            res.send(null);
        });
});

module.exports = router;
