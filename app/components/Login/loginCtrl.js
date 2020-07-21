angular
.module("loginApp", [])
.controller("loginController", function ($scope, $location, Users, $timeout, userService, authService) {
  $scope.redirectToRegister = function () {
    $location.path("/register");
  };

  
  if(userService.getUser()){
      $location.path("/user");
    }
    
    $scope.Users=Users
    $scope.checkValidation=false;
    $scope.errorMessage='';

    $scope.login = function (form) {
      $scope.checkValidation=true;

      const user = {
        username: $scope.username,
        password: $scope.password,
      };

      if(!user.username || !user.password || form.$invalid){
        return;
      }

      $scope.checkValidation=false;

      if(authService.authenticate(user)){
        $location.path("/user");
      } else{
        $scope.errorMessage='Wrong Credentials';
          console.log(
            $scope.errorMessage
          )
        $timeout(()=>{
          $scope.errorMessage='';
        },3000)
      }
    };

  });
