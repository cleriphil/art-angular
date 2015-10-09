'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
       redirectTo: '/home'
   });
 }]);
