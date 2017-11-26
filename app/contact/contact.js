'use strict';

angular.module('webApp.contact', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/contact', {
		templateUrl: 'contact/contact.html',
		controller: 'ContactCtrl'
	});
}])

.controller('ContactCtrl', ['$scope', '$http'
	, function($scope, $http){

	console.log('Hola! contact');

	$http.get('../config/contact.json').then(function(response){
		$scope.contacts = response.data;
	});

}])