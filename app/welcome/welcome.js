'use strict';

angular.module('myApp.welcome', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('welcome', {
    url: "/welcome",
    templateUrl: 'welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
})

.controller('WelcomeCtrl', ['$scope','CommonProp', function($scope,CommonProp) {
  $scope.username = CommonProp.getUser();
}]);
