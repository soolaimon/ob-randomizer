var obApp = angular.module("obApp", []);


obApp.controller("obController", function ($scope, $http){

	$http.get('/agents').success(function(data) {
		
		$scope.agents = data;

	});

	$scope.updateAgents = function () {
		console.log($scope.agents.length);
		$http.post('/agents', $scope.agents).success(function (data){
		});

	};

	// Adds present agents to 'here' array, picks random out of that.
	$scope.randomize = function (){
		
		$scope.here = [];

		for (i = 0; i < $scope.agents.length; i++){
			if ($scope.agents[i].present){
				$scope.here.push($scope.agents[i].name);
			}
		}

		$scope.winner = $scope.here[Math.floor(Math.random()*$scope.here.length)];

	};

	$scope.addAgent = function (newAgent){

		$scope.agents.push({'name' : newAgent, "present": true});
		$scope.newAgent = "";
		$scope.updateAgents();
	};

	$scope.rmAgent = function (index) {

		if(window.confirm("Do you really want to remove " + $scope.agents[index].name + "?")){
			$scope.agents.splice(index, 1);
			$scope.updateAgents();
			
		}
	
	};

});




