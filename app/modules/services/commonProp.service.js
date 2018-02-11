var app = angular.module("beekeeperApp");

app.service('CommonProp', ['$location', '$firebaseAuth', function($location, $firebaseAuth){
	

	var user = "";
	var auth = $firebaseAuth();

	return {
		/* GET users */
		getUser: function(){
			if(user == ""){
				user = localStorage.getItem("userEmail");
			}
			return user;
		},
		/* SET users */
		setUser: function(value){
			localStorage.setItem("userEmail", value);
			user = value;
		},
		/* LOGOUT */
		logoutUser: function(){
			auth.$signOut();
			console.log("Logged Out Succesfully");
			user = "";
			localStorage.removeItem('userEmail');
			$location.path('/home');
		}
	};
}]);