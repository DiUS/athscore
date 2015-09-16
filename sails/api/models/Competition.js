var Promise = require("bluebird");

module.exports = {

  tableName: 'competitions',

  attributes: {
    name:'STRING',
    year:'STRING',
    organiser_id: {
      model: 'organiser'
    }
  },
};
