
var appModule = angular.module('app', []);

appModule.controller('AppController', function($http, $scope) {
  $scope.places = [];
  $scope.loading = false;
  $scope.showError = false;
  $scope.search = function() {
    $scope.loading = true;
    $scope.showError = false;
    $scope.places = [];
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var location = latitude + ',' + longitude;
      $http({
        method: 'GET',
        url: '/places?' + 'keyword=' + $scope.keyword + '&location=' + location
      })
      .then(function(results) {
        $scope.loading = false;
        if (!results.data.results.length) {
          $scope.showError = true;
        } else {
          $scope.places = results.data.results.map(function(place) {
            return {
              vicinity: place.vicinity,
              name: place.name,
              url: place.name + ' ' + place.vicinity
            }
          });
        }
      }, function(err) {
        $scope.loading = false;
        $scope.showError = true;
      });
    });
  }
});

