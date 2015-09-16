exports.seed = function (knex, Promise) {

 return knex('competitions').del()
   .then(function () {
     return knex('organisers').del()
   })
   .then(function () {
     return Promise.join(
       knex('organisers').insert({ id: 1, name: 'AFL' }),
       knex('organisers').insert({ id: 2, name: 'Cricket League' }),
       knex('organisers').insert({ id: 3, name: 'Chess club' }));
   })
   .then(function () {
     return Promise.join(
       knex('competitions').insert({ organiser_id: 1, description: "Thuggery", year: "1234" }),
       knex('competitions').insert({ organiser_id: 2, description: "Boring", year: "1234" }),
       knex('competitions').insert({ organiser_id: 3, description: "Smart", year: "1234" }));
   });
};
