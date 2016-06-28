var getDataService=angular.module('getDataService',['ngResource']);
var getDataUrl = '';
getDataService.factory('getDataFactory',function($resource){
    var getDataFactory;
    getDataFactory=$resource(getDataUrl,{},{
        getUserData:{
            url:"demo/:name.json",
            method:"GET",
            isArray:true,
            headers:{
                Accept:"application/json",
                "content-type":"application/json"
            }
        }
      });
    return getDataFactory;
});
