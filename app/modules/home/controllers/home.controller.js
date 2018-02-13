var app = angular.module("beekeeperApp");

app.controller('HomeCtrl', ['$scope', '$http', '$timeout', 'CommonProp'
	, function($scope, $http, $timeout, CommonProp) {

	console.log('Hola! Home');
	
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

}]);