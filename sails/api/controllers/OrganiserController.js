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
   * `OrganiserController.update()`
   */
  update: function (req, res) {
    OrganiserService.update(
      req.params.id,
      req.body
    ).then(function (updated) {
      res.status(200).send(updated);
    });
  },


  /**
   * `OrganiserController.get()`
   */
    get: function (req, res) {
        return OrganiserService.findOne(req.params.id).then(function (organiser) {
            return res.json(organiser);
        });
    },


  /**
   * `OrganiserController.list()`
   */
  list: function (req, res) {
    return OrganiserService.list().then(function (organisers) {
      res.json(organisers);
    });
  }
};

