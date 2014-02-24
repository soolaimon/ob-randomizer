var sys = require("sys");
var express = require("express");
var app = express();

var jf = require('jsonfile');
var util = require('util');
var file = 'public/agents.json';



app.configure(function() {
        app.use(express.static(__dirname + '/public'));
        app.use(express.json());
});

app.get('/', function(req, res) {
	res.sendfile("index.html");
});

app.get('/agents', function(req, res) {
	res.sendfile('public/agents.json');
});

//  Updates .json file with agent list, present/not.
app.post('/agents', function(req, res) {
	res.send("got it");
	var newList = req.body;
	jf.writeFile(file, newList, function(err){
		console.log(err);
	});
});


// console.log(rand.randomize(agents));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});



