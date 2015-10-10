'use strict';

angular.module('myApp.addAuction', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('addAuction', {
        url: "/addAuction",
        templateUrl: 'addAuction/addAuction.html',
        controller: 'AddAuctionCtrl'
    });
})

.controller('AddAuctionCtrl', ['$scope', '$firebaseObject', 'CommonProp', function($scope, $firebaseObject, CommonProp) {
  $scope.addAuction = function() {

    var title = $scope.auction.title;
    var description = $scope.auction.description;
    var startDate = $scope.auction.startDate.toString();
    var endDate = $scope.auction.endDate.toString();
    var emailId = CommonProp.getUser();


    var ref = new Firebase("https://art-app.firebaseio.com");
    var auctionsRef = ref.child("auctions");

    auctionsRef.push().set({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      emailId: emailId
    },
    function(error) {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Post set successfully!");
      }
    });

  }
}]);
