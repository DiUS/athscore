var Sails = require('sails'),
  sails;

var chai = require("chai");
chai.config.truncateThreshold = 5000;
chai.should();

global.Fixtures = {
  Organiser : require("./fixtures/organiser")
};

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  Sails.lift({
    // configuration for testing purposes
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  Sails.lower(done);
});
