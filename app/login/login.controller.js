'use strict';

angular.module('beekeeper.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope', '$http'
	, function($scope, $http) {
	
	$scope.text = 'This is from login controller!';

}]);