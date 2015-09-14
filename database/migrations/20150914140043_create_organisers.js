
exports.up = function(knex, Promise) {
  return knex.schema.createTable("organisers", function(t) {
    t.increments();
    t.string("name");
    t.string("address");
    t.string("contact");
    t.string("description");
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("organisers");
};
