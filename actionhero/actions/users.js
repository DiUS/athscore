"use strict";

exports.usersIndex = {
  name: "usersIndex",
  description: "Index stuff",
  run: function (api, connection, next) {
    api.models.User.fetchAll()
      .then(function (users) {
        connection.response = users;
        next(true);
      })
      .catch(function (err) {
        connection.error = err;
        next(err);
      });
  }
};