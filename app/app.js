'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.register',
  'myApp.welcome',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
       redirectTo: '/login'
   });
 }]);
