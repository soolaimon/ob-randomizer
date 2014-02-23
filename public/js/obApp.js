var obApp = angular.module("obApp", []);


obApp.controller("obController", function ($scope, $http){

	$http.get('/agents').success(function(data) {
		
		$scope.agents = data;

	});

	$scope.updateAgents = function () {
		console.log($scope.agents.length);
		$http.post('/agents', $scope.agents).success(function (data){
			console.log(data);
		});

	};

	$scope.randomize = function (){
		
		console.log($scope.agents.length);
		
		$scope.here = [];

		for (i = 0; i < $scope.agents.length; i++){
			if ($scope.agents[i].present){
				$scope.here.push($scope.agents[i].name);
			}
		}

		$scope.winner = $scope.here[Math.floor(Math.random()*$scope.here.length)];

	};

	
	
});



