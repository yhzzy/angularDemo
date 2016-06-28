var userController = angular.module("userController",[]);
//userController.controller("userCtrl",function($scope, $http){
//    $http({
//        url:'demo.json',
//        method:'GET',
//        headers:{
//            Accept:"application/json",
//            "content-type":"application/json"
//        }
//    }).success(function(data, status, headers, config) {
//        $scope.items = data;
//        console.log(data);
//    });
//});
userController.controller("userCtrl",["$scope","getDataFactory",function($scope,getDataFactory){
    $scope.items = getDataFactory.getUserData();
    console.log($scope.items);
}]);