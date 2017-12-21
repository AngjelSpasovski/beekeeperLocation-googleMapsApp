var app = angular.module("beekeeperApp");

app.controller('ContactCtrl', ['$scope', '$http', 
	function($scope, $http) {
	
	console.log('Hola! ContactCtrl');

	$http.get('../../../config/contact.json').then(function(response){
		$scope.contacts = response.data;
	});
}]);