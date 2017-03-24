


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
    
    $scope.flightStatusCodes = {
      SCH:{name:"Flight scheduled", description: "Indicates when a Flight (created by the aircraft operator) is scheduled to take place."},
      AIR:{name:"Airborne", description: "Airborne is a flight state at which the flight is airborne. The flight is en route."},
      EXP:{name:"Expected landing", description: "Is a flight state which is used when the Estimated Landing Time (ELTD – Expected Landing Time) for an inbound flight to Amsterdam Airport Schiphol has 10 minutes or more deviation from the scheduled time."},
      FIR:{name:"Flight in Dutch airspace", description: "FIR is an abbreviation for ‘Flight Information Region’. In the context of CISS this is the Dutch Airspace."},
      LND:{name:"Landed", description: "When an aircraft has landed on the runway and is taxiing to the gate."},
      FIB:{name:"FIBAG", description: "Is a flight state which indicates that the First Baggage of an arriving flight will be on the(luggage) belt very soon."},
      ARR:{name:"Arrived Flight has been completely handled", description: "Is a flight state at which the luggage of an arriving flight has been completely handled and is off the luggage belt."},
      DIV:{name:"Diverted", description: "When the flight is diverted from Amsterdam Airport Schiphol. For those flights the flight state will be changed to DIV and the flight will not arrive at EHAM (Amsterdam Airport Schiphol)."},
      CNX:{name:"Cancelled", description: "A scheduled flight that actually will not be operated."},
      TOM:{name:"Tomorrow", description: "When the date of an expected landing exceeds the initial date."},
      SCH:{name:"Flight scheduled", description: "Indicates when a Flight (created by the aircraft operator) is scheduled to take place."},
      DEL:{name:"Delayed", description: "The deviation between the expected time of departure and the scheduled time exceeds 10 minutes."},
      WIL:{name:"Wait in Lounge", description: "Is a flight state that indicates that the gate for a departing flight at the M pier or H pier is not available yet for boarding. Passengers need to wait in the lounge."},
      GTO:{name:"Gate Open", description: "When the gate is opened/released by the handler "},
      BRD:{name:"Boarding", description: "The actual boarding of the passengers starts."},
      GCL:{name:"Gate Closing", description: "The flight handler of the flight is closing the gate of the departing flight shortly."},
      GTD:{name:"Gate closed", description: "This flight state indicates that the gate for a departing flight is closed and passenger boarding is not possible anymore."},
      DEP:{name:"Departed", description: "Departing aircraft is taxiing to the runway."},
      CNX:{name:"Cancelled", description: "A scheduled flight that will not be operated."},
      GCH:{name:"Gate Change", description: "The gate of departure for a scheduled flight changes to another gate."},
      TOM:{name:"Tomorrow", description: "When the date of an expected departure exceeds the initial date."},
  };
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

