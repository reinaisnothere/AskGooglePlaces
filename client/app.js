var userModule = angular.module('users', []);

var appModule = angular.module('app', []);

appModule.controller('AppController', function($http, $scope) {
  $scope.places = [];

  $scope.search = function() {
    $http({
      method: 'GET',
      url: ''
    })
    .then(function(results) {

    }, function(err) {

    });
  }

});
