angular.module("registerApp",[])
    .controller('registerController',function($scope, $location, Users, userService, authService){
        if(userService.getUser()){
            $location.path("/user");
        }
          
        $scope.Users=Users

        $scope.backToLogin = function () {
            $location.path("/login");
        };

        $scope.register = function(form){
            if(form.$invalid){
                return;
            }

            const newUser = {
                username: $scope.username,
                email: $scope.email,
                name: $scope.name,
                lastname: $scope.lastname,
                password: $scope.password,
                cards:[]
            };
            
            Users.push(newUser);
            if(authService.authenticate(newUser)){
                $location.path("/user");
            }
        }
    })  

    .directive("compareTo", function() {
        return {
            require: "ngModel",
            scope: {
                confirmPassword: "=compareTo"
            },
        link: function(scope, element, attributes, modelVal) {

            modelVal.$validators.compareTo = function(val) {
                return val == scope.confirmPassword;
            };

            scope.$watch("confirmPassword", function() {
            modelVal.$validate();
            });
        }
        };
    });