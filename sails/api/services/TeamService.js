var Promise = require("bluebird");

module.exports = {
  persist: function (team) {
    return Team.create(team)
      .then(function (savedTeam) {
        return Team.find({ id: savedTeam.id }).populateAll();
      })
  },

  find: function(id) {
      return Team.find({ id: id }).populateAll();
  },

  list: function() {
      return Team.find().populateAll();
  }
};
