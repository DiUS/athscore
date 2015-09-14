"use strict";

module.exports = function(api) {

  // Organiser Model
  api.models.Organiser = api.bookshelf.Model.extend({

    tableName: 'organisers',
    competitions: function() {
      return this.hasMany(api.models.Competition);
    }
  }, {

    findByName: function(name, options) {
      if (options == null) { options = {}; }
      if (!options.require) { options.require = true; }
      return this.forge({name: name}).fetch(options);
    },

    findWithComps: function(id, options) {
      if (options == null) { options = {withRelated: ['competitions']}; }
      if (!options.require) { options.require = true; }
      return this.forge({id: id}).fetch(options);
    }


  });


  // Organiser Collection
  api.models.Organisers = api.bookshelf.Collection.extend({

    model: api.models.Organiser

  });

};
