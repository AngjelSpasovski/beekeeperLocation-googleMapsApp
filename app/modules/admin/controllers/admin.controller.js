var app = angular.module("beekeeperApp");

app.controller('AdminCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location'
	, function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
	
	console.log('Hola! Admin!');


	$scope.username = CommonProp.getUser();

	if(!$scope.username){
		$location.path('/');
	}

	var ref = firebase.database().ref().child('Articles');
	$scope.articles = $firebaseArray(ref);

	$scope.editPost = function(id){
		var ref = firebase.database().ref().child('Articles/' + id);
		$scope.editPostData = $firebaseObject(ref);
		
		console.log("*** OUT editPost ***");
		console.log($scope.editPostData);
	};

	$scope.updatePost = function(id){
		var ref = firebase.database().ref().child('Articles/' + id);
		ref.update({

			name: $scope.editPostData.name,
			surname: $scope.editPostData.surname,
			email: $scope.editPostData.email,
			address: $scope.editPostData.address,
			phone: $scope.editPostData.phone,
			numberBees: $scope.editPostData.numberBees,
			moreInfo: $scope.editPostData.moreInfo

		}).then(function(ref){
			$scope.$apply(function(){
				$("#editModal").modal('hide');
				console.log("Modal Hide!!!");
			});
		}, function(error){
			console.log("Error!!!");
			console.log(error);
		});
	};

	$scope.deleteCnf = function(article){
		$scope.deleteArticle = article;
		console.log("DeleteCnf : " + article);
	};

	$scope.deletePost = function(deleteArticle){
		$scope.articles.$remove(deleteArticle);
		$("#deleteModal").modal('hide');
	};

	$scope.logout = function(){
		CommonProp.logoutUser();
		$location.path('/');
	}

}]);