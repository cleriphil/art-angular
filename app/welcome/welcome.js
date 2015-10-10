'use strict';

angular.module('myApp.welcome', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url: "/welcome",
    templateUrl: 'welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
})

.controller('WelcomeCtrl', ['$scope','CommonProp', '$firebaseArray', '$firebaseObject', function($scope, CommonProp, $firebaseArray, $firebaseObject ) {
  $scope.username = CommonProp.getUser();
  var ref = new Firebase("https://art-app.firebaseio.com/auctions");
  $scope.auctions = $firebaseArray(ref);

  $scope.editAuction = function(id) {
    var ref = new Firebase("https://art-app.firebaseio.com/auctions/" + id);
    $scope.auctionToUpdate = $firebaseObject(ref);
    $('#editModal').modal();      // triggers the modal pop up
  }

  $scope.update = function() {
    console.log($scope.auctionToUpdate.$id);
    var currentAuction = new Firebase("https://art-app.firebaseio.com/auctions/" + $scope.auctionToUpdate.$id);
    var article = $firebaseObject(currentAuction);

    var startDate = $scope.auctionToUpdate.startDate.toString();
    var startDate = new Date(startDate);

    var endDate = $scope.auctionToUpdate.endDate.toString();
    var endDate = new Date(endDate);

    currentAuction.update({
        title: $scope.auctionToUpdate.title,
        description: $scope.auctionToUpdate.description,
        startDate: startDate,
        endDate: endDate,
        emailId: $scope.auctionToUpdate.emailId
    },
    function(error) {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Auction updated successfully!");
        $('#editModal').modal('hide');
      }
    });
  };

}]);
