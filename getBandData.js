var knex = require('knex')(require('./knexfile.js').development);
// Function to take a band id and return a band object
var getBandData = id => {

    var bandObj = {}; //create an empty object
    bandObj.band_id = id; //set the object's band_id to the id passed into the function

    knex('bands').select('band_name').first().where('id', id) // Get band name from DB
        .then(data => { // Take the data from the first query and add the band name
            bandObj.name = data.band_name;
            return knex('users').select('display_name', 'id as user_id') // return a knex promise chain
                .innerJoin('users_bands', 'users_id', 'id')
                .where('bands_id', id);
        })
        .then(data => { // Take the data from the last query and add member objects
            var members = [];
            for (var member of data) {
                members.push(member);
            }
            bandObj.members = members;
            return knex('gigs') // return a knex promise chain
                .select(
                    'id as gig_id',
                    'gig_date as date',
                    'venue',
                    'load_in_time as loadInTime',
                    'start_time as startTime',
                    'end_time as endTime',
                    'setlist_id')
                .where('band_id', id)
        })
        .then(data => { // Take the data from the last query and add gig objects
            var gigs = [];
            for (var gig of data) {
                gigs.push(gig);
            }
            bandObj.gigs = gigs;
            return knex('songs') // return a knex promise chain
                .select('song_name as title', 'id as song_id')
                .where('band_id', id)
        })
        .then(data => { // Take the data from the last query and add songs objects
            var songs = [];
            for (var song of data) {
                songs.push(song);
            }
            bandObj.songs = songs;
            return knex('setlists')  // return a knex promise chain
                    .select('setlist_name', 'order_in_list', 'song_name')
                    .innerJoin('songs_setlists', 'setlists_id', 'setlists.id')
                    .innerJoin('songs', 'songs_id', 'songs.id')
                    .where('setlists.band_id', 1)
                    .orderBy('setlists_id')
                    .orderBy('order_in_list')
                    // .groupBy('setlists_id', 'setlists.id', 'songs_id', 'songs.id')
        })
        .then(data => { // Take the data from the last query and add setlist objects
            console.log(data);
            var setlists = [];

        })
        .then(() => { // Show us the built band object and exit
            // console.log(bandObj);
            process.exit();
        });

};

getBandData(1);
