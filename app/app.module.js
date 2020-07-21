var app = angular.module("myApp", [
  "ngRoute",
  "loginApp",
  "registerApp",
  "userApp",
  "cardsApp",
  "dashboardApp",
  "services",
  "translate",
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo: "/login",
    })
    .when("/login", {
      templateUrl: "app/components/Login/loginView.html",
      controller: "loginController",
    })
    .when("/register", {
      templateUrl: "app/components/Register/registerView.html",
      controller: "registerController",
    })
    .otherwise({
      redirectTo:'/login'
    })
});

app.controller("loadController",function($scope,$rootScope){
  $scope.loadFinished=false;

  $rootScope.$on("$routeChangeSuccess", function () {
    $scope.loadFinished=true;
  });
})

app.controller("dropdownController", function (
  $scope,
  $window,
  $location,
  userService
) {
  $scope.User = userService.getUser();
  $scope.dropdown = false;

  $scope.$watch(userService.getUser, function () {
    $scope.User = userService.getUser();
  });

  $scope.logout = function () {
    userService.setUser(null);
    $window.localStorage.removeItem("userData");
    $scope.dropdown = false;
    $location.path("/login");
  };

  $scope.toggleDropdown = function () {
    $scope.dropdown = !$scope.dropdown;
    if ($scope.dropdown) {
      $window.onclick = function (event) {
        var dropdownElement = $window.document.getElementsByClassName(
          "dropdown"
        )[0];
        var clickedElement = event.target;
        if (!clickedElement) return;
        if (!dropdownElement.contains(clickedElement)) {
          $scope.dropdown = false;
          $window.onclick = null;
          $scope.$apply();
        }
      };
    } else {
      $window.onclick = null;
    }
  };
});

app.factory("Users", function () {
  return [
    {
      username: "Test",
      email: "test@gmail.com",
      name: "Test",
      lastname: "Test",
      password: "test",
      cards: [
        { cardNumber: "378946821144951", type: "credit", amount: "1000" },
        { cardNumber: "362618535482195", type: "credit", amount: "2000" },
        { cardNumber: "4913818528814543", type: "debit", amount: "3" },
      ],
    },
  ];
});
