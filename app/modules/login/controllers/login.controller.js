var app = angular.module("beekeeperApp");

app.controller('LogInCtrl', ['$scope', '$firebaseAuth', '$location', 'CommonProp'
	, function($scope, $firebaseAuth, $location, CommonProp){

	console.log('Hola! Log In');

	$scope.username = CommonProp.getUser();

	if($scope.username){
		$location.path('/welcome');
	}

	// Sign In function
	$scope.signIn = function(){
		
		// Filed values
		var username = $scope.user.email;
		var password = $scope.user.password;
		var auth = $firebaseAuth();

		auth.$signInWithEmailAndPassword(username, password).then(function(){
			
			// User validation ( Admin/User )
			if(username === 'admin@admin.com' && password === '12345678'){
				console.log("Admin Login Successful");
				CommonProp.setUser($scope.user.email);
				$location.path('/admin');
			}else {
				console.log("User Login Successful");
				CommonProp.setUser($scope.user.email);
				$location.path('/user');
			}
			
		}).catch(function(error){
			$scope.errMsg = true;
			$scope.errorMessage = error.message;
		});
	}

}]);