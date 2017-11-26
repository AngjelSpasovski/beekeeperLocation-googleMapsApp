'use strict';

angular.module('webApp.addPost', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/addPost', {
		templateUrl: 'addPost/addPost.html',
		controller: 'AddPostCtrl'
	});
}])

.controller('AddPostCtrl', ['$scope', '$firebaseArray', '$location', 'CommonProp', function($scope, $firebaseArray, $location, CommonProp){

	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/home');
	}

	var ref = firebase.database().ref().child('Articles');
	$scope.articles = $firebaseArray(ref);

	$scope.successAdd = true;

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
					$location.path('/home');
				});
			}, 2000);
		}, function(error){
			console.log(error);
		});
	};

	$scope.logout = function(){
		CommonProp.logoutUser();
		$location.path('/');
	}

}]);
