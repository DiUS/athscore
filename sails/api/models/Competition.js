var Promise = require("bluebird");

module.exports = {

  attributes: {
    name:'STRING',
    year:'STRING',
    owner: {
      model: 'organiser'
    }
  },
};