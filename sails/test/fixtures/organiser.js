module.exports = {
  validOrganiser : function () {
    return {
      name : "hello",
      description: "description"
    }
  },

  validOrganiserWithCompetition : function () {
    return {
      name : "hello",
      description: "description",
      competitions: [{
        name: "hello",
        description: "sdfsfdsf"
      }]
    }
  }
};