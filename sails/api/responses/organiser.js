module.exports = function viewOrganiser (data) {

  // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;

  // Set status code
  res.status(200);
  return res.view('organiser', {data: data });
};
