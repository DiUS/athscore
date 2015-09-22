var request = require('supertest');

describe('HealthController', function() {

  describe('#get()', function() {
    it('should check application health status at /health', function (done) {
      request(sails.hooks.http.app)
        .get('/health')
        .expect(200, {app: "actionaths", status: "OK"}, done)
    });
  });

});
