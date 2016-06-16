exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('gigs').insert({
          band_id: 1,
          gig_date: new Date('2016/06/15'),
          venue: 'Red Rocks',
          load_in_time: '5:00 PM',
          start_time: '7:00 PM',
          end_time: '10:00 PM',
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
          gig_date: new Date('2016/06/15'),
          venue: 'Boulder Theatre',
          load_in_time: '5:45 PM',
          start_time: '7:00 PM',
          end_time: '10:00 PM'
        })
    );
};
