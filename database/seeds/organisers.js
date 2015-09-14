
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('competitions').del(),
    knex('organisers').del(),

    knex('organisers').insert({id: 1, name: 'AFL'}),
    knex('organisers').insert({id: 2, name: 'Cricket League'}),
    knex('organisers').insert({id: 3, name: 'Chess club'}),

    knex('competitions').insert({organiser_id: 1, description: "Thuggery", year: "1234", }),
    knex('competitions').insert({organiser_id: 2, description: "Boring", year: "1234", }),
    knex('competitions').insert({organiser_id: 3, description: "Smart", year: "1234", })
  );
};
