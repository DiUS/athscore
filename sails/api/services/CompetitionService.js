var Promise = require("bluebird");

module.exports = {
  persist: function (competition) {
    return Competition.create(competition)
      .then(function (savedCompetition) {
        return Competition.find({ id: savedCompetition.id }).populateAll();
      })
  },

  update: function (id, competition) {
    return Competition.update({id: id}, competition);
  },

  findOne: function(id) {
      return Competition.findOne({ id: id }).populateAll();
  },

  list: function() {
      return Competition.find().populateAll();
  }
};
