exports.seed = function(knex, Promise) {
    return Promise.join(

        knex('gigs').update({
            setlist_id: 1
        }).where('gigs.id', 1),
        knex('gigs').update({
            setlist_id: 2
        }).where('gigs.id', 2),
        knex('gigs').update({
            setlist_id: 3
        }).where('gigs.id', 3)

    );
};
