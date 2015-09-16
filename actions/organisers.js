"use strict";

exports.organisersIndex = {
  name: "organisersIndex",
  description: "Index stuff",
  run: function (api, connection, next) {
    api.models.Organiser.fetchAll()
      .then(function (organisers) {
        connection.response = organisers;
        next(true);
      })
      .catch(function (err) {
        connection.error = err;
        next(err);
      });
  }
};

exports.organiser = {
  name: "organiser",
  description: "get org",
  inputs: {
    id: {
      required: true
    }
  },
  run: function (api, connection, next) {
    api.models.Organiser.findWithComps(connection.params.id)
      .then(function (organiser) {
        connection.response = organiser;
        next(true);
      })
      .catch(function (err) {
        connection.error = err;
        next(err);
      });
  }
};

exports.newOrganiser = {
  name: "newOrganiser",
  description: "new org",
  inputs: {
    name: {required: true},
    address: {required: false},
    contact: {required: false},
    description: {required: false},
    competitions: {required: false}
  },
  run: function (api, connection, next) {
    var hash = {name: connection.params.name, 
                  address: connection.params.address, 
                  contact: connection.params.contact, 
                  description: connection.params.description};
      
    console.log(connection.params);

    var newOrg = new api.models.Organiser(hash);  
    newOrg.save().then(function(savedOrg) {
      var compsHash = JSON.parse(connection.params.competitions);
      compsHash[0].organiser_id = savedOrg.id;

      var newComp = new api.models.Competition(compsHash[0]);
      newComp.save().then( function() { next(); }); 
    });
  }
};
