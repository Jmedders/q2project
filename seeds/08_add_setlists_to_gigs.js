exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('gigs').update({
            setlist_id: 1
        }).where('gigs.id', 1),
        knex('gigs').update({
            setlist_id: 1
        }).where('gigs.id', 2),
        knex('gigs').update({
            setlist_id: 5
        }).where('gigs.id', 3),
        knex('gigs').update({
            setlist_id: 7
        }).where('gigs.id', 4),
        knex('gigs').update({
            setlist_id: 4
        }).where('gigs.id', 5),
        knex('gigs').update({
            setlist_id: 2
        }).where('gigs.id', 6),
        knex('gigs').update({
            setlist_id: 8
        }).where('gigs.id', 7),
        knex('gigs').update({
            setlist_id: 6
        }).where('gigs.id', 8),
        knex('gigs').update({
            setlist_id: 5
        }).where('gigs.id', 9),
        knex('gigs').update({
            setlist_id: 3
        }).where('gigs.id', 10)

    );
};
