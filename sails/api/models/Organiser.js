module.exports = {

  tableName: 'organisers',

  attributes: {
    name:'STRING',
    address :'STRING',
    competitions: {
      collection: 'competition',
      via: 'organiser_id'
    }
  }
};
