'use strict';

angular.module('list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.rates = {};
    $http.get('https://openexchangerates.org/api/latest.json?app_id=367769e2d8204e40a9e3ddc894a88205')
        .then(function(res) {
            $scope.rates = res.data.rates;
        });

}]);