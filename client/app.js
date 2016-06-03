
var appModule = angular.module('app', []);

appModule.controller('AppController', function($http, $scope) {
  $scope.places = [];

  $scope.search = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var location = latitude + ',' + longitude;
      $http({
        method: 'GET',
        url: '/places?' + 'keyword=' + $scope.keyword + '&location=' + location
      })
      .then(function(results) {
        $scope.places = results.data.results;
      }, function(err) {

      });
    });
  }
});

