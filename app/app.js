'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'webApp.home',
  'webApp.about',
  'webApp.contact',
  'webApp.login',
  'webApp.register',
  'webApp.welcome',
  'webApp.addPost',
  'webApp.admin'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
