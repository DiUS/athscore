'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable("competitions", function(t) {
    t.increments();
    t.string("name");
    t.string("description");
    t.string("year");
    t.integer("organiser").references('organisers.id')
    t.timestamps();
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("competitions");  
};
