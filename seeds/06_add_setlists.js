exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('setlists').insert({
          setlist_name: 'Bananas',
          description: 'Our go-to set',
          band_id: 1
        }),
        knex('setlists').insert({
          setlist_name: 'Apples',
          description: 'Our backup set',
          band_id: 1
        }),
        knex('setlists').insert({
          setlist_name: 'Peaches',
          description: 'Quite tasty',
          band_id: 3
        }),
        knex('setlists').insert({
          setlist_name: 'Grapes',
          description: 'Insanity',
          band_id: 4
        }),
        knex('setlists').insert({
          setlist_name: 'Apricot',
          description: 'Full of jams',
          band_id: 3
        }),
        knex('setlists').insert({
          setlist_name: 'Cheese',
          description: 'The crowd loves it',
          band_id: 4
        }),
        knex('setlists').insert({
          setlist_name: 'Chill',
          description: 'The perfect set for retirement homes',
          band_id: 2
        }),
        knex('setlists').insert({
          setlist_name: 'Ambient',
          description: 'Mostly white-noise',
          band_id: 2
        })
    );
};
