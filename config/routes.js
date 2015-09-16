exports.default = {
  routes: function(api){
    return {
      get: [
        { path: "/users", action: "usersIndex" },
        { path: "/organisers", action: "organisersIndex" },
        { path: "/organisers/:id", action: "organiser" }
      ],
      post: [
          { path: "/organisers", action: "newOrganiser" }
      ]
    }
  }
}
