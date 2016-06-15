exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('setlists').insert({
          setlist_name: 'Bananas',
          description: 'Our go-to set'
        }),
        knex('setlists').insert({
          setlist_name: 'Apples',
          description: 'Our backup set'
        }),
        knex('setlists').insert({
          setlist_name: 'Peaches',
          description: 'Quite tasty'
        })
    );
};
