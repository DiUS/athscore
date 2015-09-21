'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable("teams", function(t) {
    t.increments();
    t.string("name");
    t.string("description");
    t.string("age_group");
    t.string("contact");
    t.timestamps();
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("teams");    
};
