exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments();
            table.string('user_name');
            table.string('password');
        })
        .createTable('bands', function(table) {
            table.increments();
            table.string('band_name');
        })
        .createTable('songs', function(table) {
            table.increments();
            table.string('song_name');
            table.integer('band_id').references('bands.id');
            table.string('song_key');
            table.string('time_signature');
            table.string('feel');
            table.integer('tempo');
        })
        .createTable('setlists', function(table) {
            table.increments();
            table.string('setlist_name');
            table.string('description');
        })
        .createTable('gigs', function(table) {
            table.increments();
            table.integer('band_id').references('bands.id');
            table.date('gig_date');
            table.string('venue');
            table.time('load_in_time');
            table.time('start_time');
            table.time('end_time');
            table.integer('setlist_id').references('setlists.id');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('gigs')
        .dropTable('setlists')
        .dropTable('songs')
        .dropTable('bands')
        .dropTable('users');
};
