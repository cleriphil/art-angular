'use strict';

angular.module('myApp.register', ['ui.router','firebase'])

// Declared route
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('register', {
    url: "/register",
    templateUrl: "register/register.html",
    controller: 'RegisterCtrl'
    });
})

// Register controller
.controller('RegisterCtrl', ['$scope','$location','$firebaseAuth', function($scope,$location,$firebaseAuth) {
   var firebaseObj = new Firebase("https://art-app.firebaseio.com");
   var auth = $firebaseAuth(firebaseObj);
  $scope.signUp = function() {
    if (!$scope.regForm.$invalid) {
         var email = $scope.user.email;
         var password = $scope.user.password;
         if (email && password) {
             auth.$createUser({
               email: email,
               password: password
             })
                 .then(function() {
                    console.log('User creation success');
                    $location.path('/login');
                 }, function(error) {
                     console.log(error);
                     $scope.regError = true;
                     $scope.regErrorMessage = error.message;
                 });
         }
     }
   };
}]);
