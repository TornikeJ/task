angular
  .module("dashboardApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/user", {
        resolve: {
          auth: function (authService) {
            return authService.isLoggedIn();
          },
        },
        controller:'dashboardController',
        templateUrl: "app/components/Dashboard/dashboardView.html",
      })
  })
  .controller('dashboardController',function($scope){
    $scope.selectedTab='account';

    $scope.selectTab = function (tab){
      switch(tab){
        case 'account':
          $scope.selectedTab='account';
          break;
        case 'cards':
          $scope.selectedTab='cards';
          break;
        default:
          $scope.selectedTab='account';
      }
    }
  })