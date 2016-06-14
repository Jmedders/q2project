exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('users')
        .where('display_name', 'Josh Newsom')
        .orWhere('display_name', 'Sean Murray')
        .orWhere('display_name', 'Jeff Medders')
        .then(function(result) {
            return knex('users_bands')
                .insert([{
                    users_id: result[0].id,
                    bands_id: 3
                }, {
                    users_id: result[1].id,
                    bands_id: 3
                }, {
                    users_id: result[2].id,
                    bands_id: 3
                }]);
        }),

        knex('users')
        .where('display_name', 'Thom Yorke')
        .orWhere('display_name', 'Jonny Greenwood')
        .orWhere('display_name', 'Colin Greenwood')
        .orWhere('display_name', 'Philip Selway')
        .orWhere('display_name', 'Ed O\'Brien')
        .then(function(result) {
            return knex('users_bands')
                .insert([{
                    users_id: result[0].id,
                    bands_id: 2
                }, {
                    users_id: result[1].id,
                    bands_id: 2
                }, {
                    users_id: result[2].id,
                    bands_id: 2
                }, {
                    users_id: result[3].id,
                    bands_id: 2
                }, {
                    users_id: result[4].id,
                    bands_id: 2
                }]);
        }),

        knex('users')
        .where('display_name', 'Paul McCartney')
        .orWhere('display_name', 'John Lennon')
        .orWhere('display_name', 'Ringo Starr')
        .orWhere('display_name', 'George Harrison')
        .then(function(result) {
            return knex('users_bands')
                .insert([{
                    users_id: result[0].id,
                    bands_id: 1
                }, {
                    users_id: result[1].id,
                    bands_id: 1
                }, {
                    users_id: result[2].id,
                    bands_id: 1
                }, {
                    users_id: result[3].id,
                    bands_id: 1
                }]);
        }),

        knex('users')
        .where('display_name', 'Eddie Vedder')
        .orWhere('display_name', 'Stone Gossard')
        .orWhere('display_name', 'Matt Cameron')
        .orWhere('display_name', 'Jeff Ament')
        .orWhere('display_name', 'Mike McCready')
        .then(function(result) {
            return knex('users_bands')
                .insert([{
                    users_id: result[0].id,
                    bands_id: 4
                }, {
                    users_id: result[1].id,
                    bands_id: 4
                }, {
                    users_id: result[2].id,
                    bands_id: 4
                }, {
                    users_id: result[3].id,
                    bands_id: 4
                }, {
                    users_id: result[4].id,
                    bands_id: 4
                }])
        })

    );
};
