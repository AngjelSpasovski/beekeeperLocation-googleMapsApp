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
		},

		/* Google API */
		initMap: function(mapContainer, latitude, longitude, zoomLevel){

			var mapOptions = {
	                zoom: zoomLevel,
	                center: new google.maps.LatLng(latitude, longitude),
	                mapTypeId: google.maps.MapTypeId.ROADMAP
	            };

	        $scope.map = new google.maps.Map(document.getElementById(mapContainer), mapOptions); 
	        $scope.overlay = new google.maps.OverlayView();
	        $scope.overlay.draw = function() {}; // empty function required
	        $scope.overlay.setMap($scope.map);
	        $scope.element = document.getElementById(mapContainer);
			
		}


	};// return end
}]);