/**
 * HealthController
 *
 * @description :: Server-side logic for managing health
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
   * `HealthController.get()`
   */
  get: function (req, res) {
    return res.json ({ app: "actionaths", status: "OK" });
  }

};

