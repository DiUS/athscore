/**
 * TeamController
 *
 * @description :: Server-side logic for managing Teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `TeamController.get()`
   */
  get: function (req, res) {
    return res.json(TeamService.find(req.params.id));
  },


  /**
   * `TeamController.list()`
   */
  list: function (req, res) {
      return TeamService.list().then(function (teams) {
          res.json(teams);
      });
  },


  /**
   * `TeamController.create()`
   */
  create: function (req, res) {
    return TeamService.persist(
      req.body
    ).then(function (created) {
      res.status(201).send(created);
    })
  },


  /**
   * `TeamController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `TeamController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

