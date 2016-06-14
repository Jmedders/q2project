exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('users').del(),

        knex('users').insert({
            user_name: 'josh',
            password: 'password'
        }),
        knex('users').insert({
            user_name: 'jeff',
            password: 'password'
        }),
        knex('users').insert({
            user_name: 'sean',
            password: 'password'
        }),
        knex('users').insert({
          user_name: 'Thom Yorke',
          password: 'hailtothethief'
        })
    );
};
