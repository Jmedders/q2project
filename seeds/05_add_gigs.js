exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('gigs').insert({
          band_id: 1,
          gig_date: new Date('2016/06/15'),
          venue: 'Red Rocks',
          load_in_time: '8:30 PM',
          start_time: '9:00 PM',
          end_time: '10:00 PM'
        }),
        knex('gigs').insert({
          band_id: 1,
          gig_date: new Date('2016/07/15'),
          venue: 'Mars',
          load_in_time: '8:00 PM',
          start_time: '7:00 PM',
          end_time: '10:00 PM'
        }),
        knex('gigs').insert({
          band_id: 3,
          gig_date: new Date('2016/09/15'),
          venue: 'Boulder Theatre',
          load_in_time: '5:45 PM',
          start_time: '7:30 PM',
          end_time: '8:00 PM'
        }),
        knex('gigs').insert({
          band_id: 2,
          gig_date: new Date('2016/01/15'),
          venue: 'Fox Theater',
          load_in_time: '5:45 PM',
          start_time: '7:00 PM',
          end_time: '10:00 PM'
        }),
        knex('gigs').insert({
          band_id: 4,
          gig_date: new Date('2016/08/22'),
          venue: 'Ogden',
          load_in_time: '6:45 PM',
          start_time: '7:00 PM',
          end_time: '7:45 PM'
        }),
        knex('gigs').insert({
          band_id: 1,
          gig_date: new Date('2016/12/15'),
          venue: 'Bluebird',
          load_in_time: '9:45 AM',
          start_time: '10:00 AM',
          end_time: '12:00 PM'
        }),
        knex('gigs').insert({
          band_id: 2,
          gig_date: new Date('2016/11/15'),
          venue: 'Denver Opera',
          load_in_time: '5:45 PM',
          start_time: '8:00 PM',
          end_time: '10:15 PM'
        }),
        knex('gigs').insert({
          band_id: 4,
          gig_date: new Date('2016/08/15'),
          venue: 'Fiske Planetarium',
          load_in_time: '5:45 PM',
          start_time: '7:00 PM',
          end_time: '10:30 PM'
        }),
        knex('gigs').insert({
          band_id: 3,
          gig_date: new Date('2016/07/25'),
          venue: 'Taco Junky',
          load_in_time: '2:45 PM',
          start_time: '4:00 PM',
          end_time: '7:00 PM'
        }),
        knex('gigs').insert({
          band_id: 3,
          gig_date: new Date('2016/09/16'),
          venue: 'Electric Zoo',
          load_in_time: '5:45 PM',
          start_time: '7:00 PM',
          end_time: '9:00 PM'
        })
    );
};
