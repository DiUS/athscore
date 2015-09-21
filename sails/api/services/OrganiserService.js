var Promise = require("bluebird");

module.exports = {
  persist: function (organiser) {
    return Organiser.create(organiser)
      .then(function (savedOrganiser) {
        return Organiser.find({ id: savedOrganiser.id }).populateAll();
      })
  },

  update: function (id, organiser) {
    return Organiser.update({id: id}, organiser);
  },

  findOne: function(id) {
      return Organiser.findOne({ id: id }).populateAll();
  },

  list: function() {
      return Organiser.find().populateAll();
  }
};
