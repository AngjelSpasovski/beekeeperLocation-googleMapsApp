var app = angular.module("beekeeperApp");

app.controller('RegistrationCtrl', ['$scope', '$firebaseAuth', '$location'
	, function($scope, $firebaseAuth, $location){

	console.log('Hola! Registration');

	// Sing In function
	$scope.signUp = function(){
		var username = $scope.user.email;
		var password = $scope.user.password;

		// Validation if the user and pass are correct
		if(username && password){
			// Firebase service for validation
			var auth = $firebaseAuth();
			auth.$createUserWithEmailAndPassword(username, password).then(function(){
				console.log("User Successfully Created");
				$location.path('/login');
			}).catch(function(error){
				console.log("ERROR!!!");
				$scope.errMsg = true;
				$scope.errorMessage = error.message;
			});
		}


	}

}])