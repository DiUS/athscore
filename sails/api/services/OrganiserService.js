var Promise = require("bluebird");

module.exports = {
  persist: function (organiser) {
    return Organiser.create(organiser)
      .then(function (savedOrganiser) {
        return Promise.all((organiser.competitions || []).map(function (competition) {
          competition.organiser_id = savedOrganiser.id;
          return Competition.create(competition);
        })).return(savedOrganiser)
      })
      .then(function (savedOrganiser) {
        return Organiser.find({ id: savedOrganiser.id }).populateAll();
      })
  }
};