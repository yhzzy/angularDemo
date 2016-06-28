var userDetailController = angular.module("userDetailController",[]);
userDetailController.controller("userDetailCtrl",["$scope","$stateParams","getDataFactory",function($scope,$stateParams,getDataFactory){
    $scope.person = $scope.items[$stateParams.name];
    //$scope.item = $stateParams.name;
    ////getDataFactory.getUserData({name:$scope.itemName},function(response){
    ////   if(response.$resolved){
    ////       $scope.item = response;
    ////   }
    ////});
    ////console.log($scope.items);
}]);

//userDetailController.controller("userDetailCtrl",["$scope","getDataFactory",function($scope,getDataFactory){
//    $scope.items = getDataFactory.getUserData();
//    console.log($scope.items);
//}]);