angular
  .module("userApp", [])
  .controller("userController", function ($scope, $window, $location, $timeout, fetchService) {
    $scope.errorMessage='';
    const userData= fetchService.fetchUser()
    if(userData.user){
        $scope.username=userData.user.username
        $scope.name=userData.user.name
        $scope.lastname=userData.user.lastname
        $scope.email=userData.user.email
        $scope.password=userData.user.password   
    } else{
        console.log(userData)
        $scope.errorMessage=userData.message  
        $timeout(()=>{
            $scope.errorMessage='';
            $window.location.reload();
        },5000)  
    }
})