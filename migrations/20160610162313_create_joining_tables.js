exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users_bands', function(table) {
            table.integer('users_id').references('users.id');
            table.integer('bands_id').references('bands.id');
            table.primary(['users_id', 'bands_id']);
        })
        .createTable('songs_setlists', function(table) {
            table.integer('songs_id').references('songs.id');
            table.integer('setlists_id').references('setlists.id');
            table.primary(['songs_id', 'setlists_id']);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('songs_setlists')
        .dropTable('users_bands');
};
