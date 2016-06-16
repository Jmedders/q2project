var knex = require('knex')(require('./knexfile.js').development);

module.exports = function usersBands(user_id) {
    var bandsArray = [];
    return knex('users')
        .select('band_name')
        .innerJoin('users_bands', 'users.id', 'users_id')
        .innerJoin('bands', 'bands.id', 'bands_id')
        .where('users.id', user_id)
        .then(function(data) {
            for (var band of data) {
                bandsArray.push(band)
            }
            return Promise.resolve(bandsArray);
        })

}

// usersBands(1).then(function (data) {
//   console.log(data);
// })
