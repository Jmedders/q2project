var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Delete all current users
        knex('gigs').del(),
        knex('songs').del(),
        knex('users_bands').del(),
        knex('bands').del(),
        knex('users').del(),

        // Insert new users

        knex('users').insert({
            user_name: 'joshN4264',
            password: bcrypt.hashSync('my_stupid_password', 8),
            display_name: 'Josh Newsom'
        }),
        knex('users').insert({
            user_name: 'test',
            password: bcrypt.hashSync('test', 8),
            display_name: 'test'
        }),
        knex('users').insert({
            user_name: 'meddersjeff',
            password: bcrypt.hashSync('better_password_than_josh', 8),
            display_name: 'Jeff Medders'
        }),
        knex('users').insert({
            user_name: 'onelinewonder',
            password: bcrypt.hashSync('drowssap', 8),
            display_name: 'Sean Murray'
        }),

        knex('users').insert({
            user_name: 'jgbeepboop',
            password: bcrypt.hashSync('iliketotwiddleknobs', 8),
            display_name: 'Jonny Greenwood'
        }),
        knex('users').insert({
            user_name: 'hailtothethief',
            password: bcrypt.hashSync('amoonshapedpool2016', 8),
            display_name: 'Thom Yorke'
        }),
        knex('users').insert({
            user_name: 'c_greenwood',
            password: bcrypt.hashSync('mybrotherismorefamousthaniam', 8),
            display_name: 'Colin Greenwood'
        }),
        knex('users').insert({
            user_name: 'p_selway_1967',
            password: bcrypt.hashSync('iplaydrumsyay', 8),
            display_name: 'Philip Selway'
        }),
        knex('users').insert({
            user_name: 'ed_obrien',
            password: bcrypt.hashSync('allthefx', 8),
            display_name: 'Ed O\'Brien'
        }),

        knex('users').insert({
            user_name: 'sirpaul',
            password: bcrypt.hashSync('iplaythe84$$', 8),
            display_name: 'Paul McCartney'
        }),
        knex('users').insert({
            user_name: 'rstarr1940',
            password: bcrypt.hashSync('yellow_octopus_submarine_garden', 8),
            display_name: 'Ringo Starr'
        }),
        knex('users').insert({
            user_name: 'george_motherfucking_harrison',
            password: bcrypt.hashSync('whileMyGuitarGentlyWeeps', 8),
            display_name: 'George Harrison'
        }),
        knex('users').insert({
            user_name: 'some_guy',
            password: bcrypt.hashSync('yokoono_onookoy', 8),
            display_name: 'John Lennon'
        }),

        knex('users').insert({
            user_name: 'ed_ved',
            password: bcrypt.hashSync('grungyAsHell4EVA', 8),
            display_name: 'Eddie Vedder'
        }),
        knex('users').insert({
            user_name: 'stone_gossard',
            password: bcrypt.hashSync('nerdrock721', 8),
            display_name: 'Stone Gossard'
        }),
        knex('users').insert({
            user_name: 'jament',
            password: bcrypt.hashSync('bass_bass_bass_pj', 8),
            display_name: 'Jeff Ament'
        }),
        knex('users').insert({
            user_name: 'mcsg',
            password: bcrypt.hashSync('iusedtoplayforsoundgarden', 8),
            display_name: 'Matt Cameron'
        }),
        knex('users').insert({
            user_name: 'mike_mccready',
            password: bcrypt.hashSync('jimmijimmihendrix', 8),
            display_name: 'Mike McCready'
        }),
        knex('users').insert({
          user_name: 'rob_crow',
          password: bcrypt.hashSync('pass', 8),
          display_name: 'Rob Crow'
        }),
        knex('users').insert({
          user_name: 'absiv',
          password: bcrypt.hashSync('pass', 8),
          display_name: 'Armistead Burwell Smith IV'
        })


    );
};
