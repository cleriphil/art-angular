'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
       redirectTo: '/home'
   });
 }]);
