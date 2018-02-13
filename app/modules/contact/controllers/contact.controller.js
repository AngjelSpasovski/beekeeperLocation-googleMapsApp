var app = angular.module("beekeeperApp");

app.controller('ContactCtrl', ['$scope', '$http', 
	function($scope, $http) {
	
	console.log('Hola! ContactCtrl');

	$http.get('../../../config/contact.json').then(function(response){
		
		// promise success
		$scope.contacts = response.data;
	
	}, function(error) {
        
        // promise rejected
        console.log("Error: ", error);
    });
}]);