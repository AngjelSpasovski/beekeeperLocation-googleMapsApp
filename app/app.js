'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'convert',
  'list'
]).
config(['$locationProvider', '$routeProvider'
	, function($locationProvider, $routeProvider) {
  	
  	$locationProvider.hashPrefix('!');

  	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController'
	})

  	.otherwise({
  		redirectTo: '/home'
  	});
}]);
