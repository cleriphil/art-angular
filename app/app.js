'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'firebase',
  'myApp.register'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
       redirectTo: '/home'
   });
 }]);
