
var app = angular.module("beekeeperApp");

app.controller('UserCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location'
	, function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
	console.log('Hola! User');

	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/');
	}

	//This will hide the DIV by default.
    $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = $scope.IsHidden ? false : true;
    }

    $scope.successAdd = true;

    // References in to the Articles in Firebase
	var ref = firebase.database().ref().child('Articles');
	$scope.articles = $firebaseArray(ref);


	// Send the data in to the database
	$scope.createPost = function(){

		var name = $scope.article.name;
		var surname = $scope.article.surname;
		var email = $scope.article.email;
		var phone = $scope.article.phone;
		var address = $scope.article.address;
		var numberBees = $scope.article.numberBees;
		var moreInfo = $scope.article.moreInfo || "";

		$scope.articles.$add({
			name: name,
			surname: surname,
			email: email,
			phone: phone,
			address: address,
			numberBees: numberBees,
			moreInfo: moreInfo
		}).then(function(ref){
			console.log(ref);
			$scope.success = true;
			window.setTimeout(function() {
				$scope.$apply(function(){
					$scope.success = false;
					CommonProp.logoutUser()
				});
			}, 2000);
		}, function(error){
			console.log("Error!!!");
			console.log(error);
		});
	};	

	// Log Out
	$scope.logout = function(){
		CommonProp.logoutUser();
		$location.path('/');
	}

	// Map initilization
	$scope.initMap = function(mapContainer, latitude, longitude, zoomLevel){

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
		
	};

	// Call Map function
	$scope.initMap("map_container", 41.99646, 21.43141, 12);
}])