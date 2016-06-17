exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('bands').insert({
            band_name: 'The Beatles'
        }),
        knex('bands').insert({
            band_name: 'Radiohead'
        }),
        knex('bands').insert({
            band_name: 'The Querymen'
        }),
        knex('bands').insert({
            band_name: 'Pearl Jam'
        }),
        knex('bands').insert({
            band_name: 'Pinback'
        })


    );
};
