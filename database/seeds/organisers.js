
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('organisers').del(),

    // Inserts seed entries
    knex('organisers').insert({id: 1, name: 'AFL'}),
    knex('organisers').insert({id: 2, name: 'Cricket League'}),
    knex('organisers').insert({id: 3, name: 'Chess club'})
  );
};
