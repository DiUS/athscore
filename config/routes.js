exports.default = { 
  routes: function(api){
    return {
      get: [
        { path: "/users", action: "usersIndex" }
      ]
    }
  }
}