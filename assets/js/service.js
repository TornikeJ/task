angular
  .module("services", [])
  .service("userService", function ($window) {
    var user;
    const storedUser = JSON.parse($window.localStorage.getItem("userData"));
    !!storedUser ? (user = storedUser) : (user = null);

    return {
      getUser: function () {
        return user;
      },
      setUser: function (value) {
        user = value;
      },
    };
  })
  .factory("authService", function (Users, userService, $location, $window) {
    return {
      authenticate: function (user) {
        const isAuthenticated = !!Users.find(
          (users) =>
            users.username === user.username && users.password === user.password
        );
        if (isAuthenticated) {
          userService.setUser({ username: user.username });
          $window.localStorage.setItem(
            "userData",
            JSON.stringify(userService.getUser())
          );
          return true;
        }

        return false;
      },
      isLoggedIn: function () {
        if (!!userService.getUser()) {
          return true;
        } else {
          $location.path("/login");
          return false;
        }
      },
    };
  })
  .factory("fetchService", function (Users, userService, $window) {
    return {
      fetchUser: function () {
        const user = JSON.parse($window.localStorage.getItem("userData"));

        if (!!user) {
          const userData = Users.find(
            (users) => users.username === user.username
          );

          if (!!userData) {
            return {
              user: { ...userData },
            };
          }

          userService.setUser(null);

          $window.localStorage.removeItem("userData");
        }
        return { message: "Couldn't fetch user, please re-login" };
      },
    };
  });
