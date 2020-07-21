angular
  .module("cardsApp", [])
  .controller("cardsController", function ($scope, $window, $location, $timeout, fetchService) {
    $scope.errorMessage='';
    $scope.selectedCard=0;
    $scope.cardImage;
    
    function selectImage(type){
        if(!type){
            return
        }

        if(type === 'debit'){
            $scope.cardImage= 'assets/images/debit_card.png';
        }
    
        if(type === 'credit'){
            $scope.cardImage= 'assets/images/credit_card.png';
        }
    }

    $scope.selectCard = function(index){
        $scope.selectedCard=index
        selectImage($scope.cards[$scope.selectedCard]?.type)
    }    
    
    const userData= fetchService.fetchUser()
    if(userData.user){
        $scope.cards=userData.user.cards
        selectImage($scope.cards[$scope.selectedCard]?.type)
    } else{
        $scope.errorMessage=userData.message  
        $timeout(()=>{
            $scope.errorMessage='';
            $window.location.reload();
        },5000)  
    }
})