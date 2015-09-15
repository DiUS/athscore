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
    description: {required: false}
  },
  run: function (api, connection, next) {
    const hash = {name: connection.params.name, address: connection.params.address, contact: connection.params.contact, description: connection.params.description};
    const newOrg = api.models.Organiser.forge(hash);
    newOrg.save().then(function() { next(); });
  }
};