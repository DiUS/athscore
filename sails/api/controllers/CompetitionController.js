/**
 * CompetitionController
 *
 * @description :: Server-side logic for managing Competitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `CompetitionController.create()`
   */
  create: function (req, res) {
    return CompetitionService.persist(
      req.body
    ).then(function (created) {
      res.status(201).send(created);
    });
  },

  
  /**
   * `CompetitionController.update()`
   */
  update: function(req, res) {
    CompetitionService.update(
      req.params.id,
      req.body
    ).then(function (updated) {
      res.status(200).send(updated);
    });
  },


  /**
   * `CompetitionController.get()`
   */
  get: function (req, res) {
    return CompetitionService.findOne(req.params.id).then(function (competition) {
        return res.json(competition);
    });
  },


  /**
   * `CompetitionController.getAll()`
   */
  list: function (req, res) {
    return CompetitionService.list().then(function (competitions) {
      res.json(competitions);
    });
  }
};

