
exports.randomize = function (agents) {
	
	var presentAgents = []

	for(var key in agents){
		if(agents[key]){
			
			presentAgents.push(key);
		}
	}
	return presentAgents[Math.floor(Math.random()*presentAgents.length)];
}

