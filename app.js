var sys = require("sys");
var express = require("express");
var app = express();

app.get('/', function(req, res) {
	res.sendfile("index.html");
});

app.listen(3000);
sys.puts("Server running on 3000");