exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.bigInteger('facebook_id');
    table.string('access_token');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('facebook_id');
    table.dropColumn('access_token');
  })
};
