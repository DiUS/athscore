/**
 * OrganiserController
 *
 * @description :: Server-side logic for managing Organisers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OrganiserController.create()`
   */
  create: function (req, res) {
    OrganiserService.persist(
      req.body
    ).then(function (created) {
      res.status(201).send(created);
    })
  },


  /**
   * `OrganiserController.get()`
   */
    get: function (req, res) {
        return Organiser.findOne({ id: req.params.id }).then(function (organiser) {
            return res.json(organiser);
        });
    },


  /**
   * `OrganiserController.getAll()`
   */
  getAll: function (req, res) {
    return Organiser.find().populate('competitions').then(function (organiser) {
      res.json(organiser);
    });
  }
};

