


//angular-ified version of hyperdev starter


//using resource
//       (function() {
//         var app = angular.module('myapp', ['ngResource']);
//         app.config(['$httpProvider',
//         function($httpProvider) {
//             $httpProvider.defaults.useXDomain = true;
//             $httpProvider.defaults.withCredentials = true;
//             //delete $httpProvider.defaults.headers.common['X-Requested-With'];
//         }]);
//         app.controller('appController', ['$scope', '$http', '$resource', function($scope,$http,$resource) {


//           this.member = " ";
//           this.method = function() {
//             //do something
//           };

//           $scope.tags = false;
//           $scope.tagsSearch = false;
          

          
//           var TagSearch = $resource('https://muntse-s-08817.europe.shell.com/piwebapi/dataservers/s0Zwm3Ai1HVUiBciNvrmWsBQU1RDQVBJQ09MTA/points?namefilter=:name');
//           https://muntse-s-08817.europe.shell.com/piwebapi/dataservers/s0Zwm3Ai1HVUiBciNvrmWsBQU1RDQVBJQ09MTA/points?namefilter=*sinu*
//           TagSearch.get({name:'*sinus*'}, function(resp){
//             console.log(resp);
//             $scope.tags = resp.Items;
//           });

//         }]);
//     })();

(function() {
  var app = angular.module('hyperdev', []);
  app.controller('HyperDevController', ['$scope','$http', function($scope,$http) {
    //$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    
    //var dreamdata;
    $scope.flights = ["Loading...","flights.."];
    $scope.moreflightscount = 0
    $scope.updateflights = function(pageNumber){
      //fetch flights from backend
      $http({
        method: "GET",
        // headers: {
        //   'ResourceVersion':'v3', //extra header needed for calls to Schiphol 
        //   "Content-Type": "text/plain"
        // },
        url: '/flights'
      }).
      then(function(data, status, headers, config) {
        if(pageNumber === 0){        
          console.log(data);
          $scope.flights = data.data.flights;
        }
        else{
          $scope.flights = $scope.flights.concat(data.data.flights);
        }
        //how could I make this 
      }).catch(function(data, status, headers, config) {
      console.log("Error getting data " + status);
    });
    }
    $scope.updateflights(0);
   
    
  }]);



})();

