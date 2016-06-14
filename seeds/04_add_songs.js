
exports.seed = function(knex, Promise) {
  return Promise.join(

    knex('songs').insert({
      song_name: 'While My Guitar Gently Weeps',
      band_id: 1,
      song_key: 'Am',
      time_signature: '4/4',
      feel: 'weepy',
      tempo: 115
    }),
    knex('songs').insert({
      song_name: 'Yesterday',
      band_id: 1,
      song_key: 'F',
      time_signature: '4/4',
      feel: 'longing',
      tempo: 97
    }),
    knex('songs').insert({
      song_name: 'Norwegian Wood',
      band_id: 1,
      song_key: 'E',
      time_signature: '6/8',
      feel: 'scandinavian psychedelic',
      tempo: 177
    }),

    knex('songs').insert({
      song_name: 'Creep',
      band_id: 2
    }),
    knex('songs').insert({
      song_name: 'The National Anthem',
      band_id: 2
    }),
    knex('songs').insert({
      song_name: '2 + 2 = 5',
      band_id: 2
    }),

    knex('songs').insert({
      song_name: 'We Fought the OAuth Kraken',
      band_id: 3,
      song_key: 'C#m',
      time_signature: '7/8',
      feel: 'epic battle music',
      tempo: 256
    }),
    knex('songs').insert({
      song_name: 'Give Me All You Data, Baby',
      band_id: 3,
      song_key: 'D',
      time_signature: '3/4',
      feel: 'creepy ballad',
      tempo: 98
    }),
    knex('songs').insert({
      song_name: 'Galvanize This!',
      band_id: 3,
      song_key: 'Em',
      time_signature: '4/4',
      feel: 'punk grock',
      tempo: 117
    }),

    knex('songs').insert({
      song_name: 'Jeremy',
      band_id: 4,
      song_key: 'G',
      time_signature: '4/4',
      feel: 'grunge',
      tempo: 105
    }),
    knex('songs').insert({
      song_name: 'Daughter',
      band_id: 4,
      song_key: 'G',
      time_signature: '4/4',
      feel: 'grunge',
      tempo: 97
    }),
    knex('songs').insert({
      song_name: 'Yellow Ledbetter',
      band_id: 4,
      song_key: 'E',
      time_signature: '4/4',
      feel: 'grunge',
      tempo: 70
    })






  );
};
