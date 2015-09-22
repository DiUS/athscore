var request = require('supertest');


describe('OrganiserService', function () {

  describe('#persist', function () {
    it('Returns the persisted object', function (done) {
      var expected = Fixtures.Organiser.validOrganiser();

      OrganiserService.persist(expected)
        .then(function (persisted) {
          persisted.should.include(expected);
          persisted.should.contain.all.keys("id", "createdAt", "updatedAt");
        })
        .finally(done);
    });

    it('Persists sub objects', function (done) {
      var expected = Fixtures.Organiser.validOrganiserWithCompetition();

      OrganiserService.persist(expected)
        .then(function (persisted) {
          persisted.competitions[0].should.include(expected.competitions[0]);
        })
        .finally(done);
    });
  });

});
