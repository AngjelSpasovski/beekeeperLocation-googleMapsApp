var app = angular.module("beekeeperApp", ['ngRoute', 'firebase']);


/*Configuration Routs*/
app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'modules/home/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'modules/about/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'modules/services/views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/contact', {
        templateUrl: 'modules/contact/views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'modules/login/views/login.html',
        controller: 'LogInCtrl'
      })
      .when('/registration', {
        templateUrl: 'modules/registration/views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/user', {
        templateUrl: 'modules/user/views/user.html',
        controller: 'UserCtrl'
      })
      .when('/admin', {
        templateUrl: 'modules/admin/views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
