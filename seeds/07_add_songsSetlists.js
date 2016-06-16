
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('songs_setlists').insert({
      songs_id: 3,
      setlists_id: 3,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 5,
      setlists_id: 1,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 2,
      setlists_id: 1,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 4,
      setlists_id: 1,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 6,
      setlists_id: 2,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 7,
      setlists_id: 2,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 1,
      setlists_id: 2,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 8,
      setlists_id: 3,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 9,
      setlists_id: 3,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 10,
      setlists_id: 1,
      order_in_list: 4
    }),
    knex('songs_setlists').insert({
      songs_id: 11,
      setlists_id: 2,
      order_in_list: 4
    }),
    knex('songs_setlists').insert({
      songs_id: 12,
      setlists_id: 3,
      order_in_list: 4
    }),
    knex('songs_setlists').insert({
      songs_id: 11,
      setlists_id: 4,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 2,
      setlists_id: 4,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 5,
      setlists_id: 4,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 9,
      setlists_id: 5,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 7,
      setlists_id: 5,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 6,
      setlists_id: 5,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 10,
      setlists_id: 6,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 8,
      setlists_id: 6,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 4,
      setlists_id: 6,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 6,
      setlists_id: 7,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 3,
      setlists_id: 7,
      order_in_list: 2
    }),
    knex('songs_setlists').insert({
      songs_id: 1,
      setlists_id: 7,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 2,
      setlists_id: 8,
      order_in_list: 3
    }),
    knex('songs_setlists').insert({
      songs_id: 8,
      setlists_id: 8,
      order_in_list: 1
    }),
    knex('songs_setlists').insert({
      songs_id: 10,
      setlists_id: 8,
      order_in_list: 2
    })
  );
};
