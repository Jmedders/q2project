exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('bands').del(),

        knex('bands').insert({
            band_name: 'The Querymen'
        }),
        knex('bands').insert({
            band_name: 'The Knighthawks'
        }),
        knex('bands').insert({
            band_name: 'The Alright Band'
        })
    );
};
