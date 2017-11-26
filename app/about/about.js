'use strict';

angular.module('webApp.about', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/about', {
		templateUrl: 'about/about.html',
		controller: 'AboutCtrl'
	});
}])

.controller('AboutCtrl', ['$scope'
	, function($scope){

	console.log('Hola! about');

}])