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
