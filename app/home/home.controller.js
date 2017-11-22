'use strict';

angular.module('beekeeper.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$http'
  , function($scope, $http) {
    
    $scope.text = 'This is from home controller!';

}]);