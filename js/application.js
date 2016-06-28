var cloudApp = angular.module("cloudApp",["ui.router","userController","userDetailController","getDataService"]);

//function cloudRouteConfig($routeProvider){
//    $routeProvider.
//        when("/",{
//            controller:"userCtrl",
//            templateUrl:"templates/user/userList.html"
//        }).
//        when("/view/:userNickname",{
//            controller:"userDetailCtrl",
//            templateUrl:"templates/user/userDetail.html"
//        }).
//        otherwise({
//            redirectTo: '/'
//        })
//}
//
//cloudApp.config(cloudRouteConfig);
cloudApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("/index",{
            url:"/index",
            templateUrl:"templates/user/userList.html",
            controller:"userCtrl"
        })
        .state("/detail",{
            url:"/detail/:name",
            templateUrl:"templates/user/userDetail.html",
            controller:"userDetailCtrl"
        });
});