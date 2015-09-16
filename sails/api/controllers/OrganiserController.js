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
    OrganiserService.persist({
      name: "thing",
      address: "address",
      competitions:[{
        name: "compname",
        year : "year2015"
      }]
    }).then(function (created) {
      res.status(201).send(created);
    })
  },


  /**
   * `OrganiserController.get()`
   */
  get: function (req, res) {
    return res.json({
      todo: 'get() is not implemented yet!'
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

