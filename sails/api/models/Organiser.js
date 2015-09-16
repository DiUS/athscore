module.exports = {

  attributes: {
    name:'STRING',
    address :'STRING',
    competitions: {
      collection: 'competition',
      via: 'owner'
    }
  }
};