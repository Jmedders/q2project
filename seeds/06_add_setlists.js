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
        })
    );
};
