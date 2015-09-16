"use strict";

module.exports = function(api) {

  // Competition Model
  api.models.Competition = api.bookshelf.Model.extend({

    tableName: 'competitions',
    organiser: function() {
      this.belongsTo(api.models.Organiser);
    }


  }, {

    findByName: function(name, options) {
      if (options == null) { options = {}; }
      if (!options.require) { options.require = true; }
      return this.forge({name: name}).fetch(options);
    }
    //...

  });


  // Competition Collection
  api.models.Competitions = api.bookshelf.Collection.extend({

    model: api.models.Competition

  });

};
