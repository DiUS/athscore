var Promise = require("bluebird");

module.exports = {
  persist: function (team) {
    return Team.create(team)
      .then(function (savedTeam) {
        return Team.find({ id: savedTeam.id }).populateAll();
      })
  },

  find: function() {
      return "Foo Ba";
  }
};
