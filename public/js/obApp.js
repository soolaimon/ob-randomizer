var obApp = angular.module("obApp", []);


obApp.controller("obController", function ($scope, $http){

	$http.get('/agents').success(function(data) {
		
		$scope.agents = data;

	});


	$scope.change = function () {
		console.log($scope.agents);
		$http.post('/agents', $scope.agents).success(function (data){
			console.log(data);
		});
	};
	
});

