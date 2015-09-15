exports.default = {
  routes: function(api){
    return {
      get: [
        { path: "/users", action: "usersIndex" },
        { path: "/organisers", action: "organisersIndex" },
        { path: "/organiser/:id", action: "organiser" }
      ],
      post: [
        { path: "/organisers", action: "newOrganiser" }
      ],
    }
  }
}