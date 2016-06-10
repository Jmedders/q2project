exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('users_bands').del(),

        knex('users_bands').insert({
            users_id: 1,
            bands_id: 1
        }),
        knex('users_bands').insert({
            users_id: 1,
            bands_id: 2
        }),
        knex('users_bands').insert({
            users_id: 1,
            bands_id: 3
        }),
        knex('users_bands').insert({
            users_id: 2,
            bands_id: 1
        }),
        knex('users_bands').insert({
            users_id: 3,
            bands_id: 1
        })
    );
};
