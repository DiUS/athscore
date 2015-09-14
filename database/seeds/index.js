"use strict";

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex("users").insert({
      username: "ah-bookshelf-plugin",
      created_at: new Date(),
      updated_at: new Date()
    })

  );
};
