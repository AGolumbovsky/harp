var express = require('express');

var port = 8778;

var app = express();

app.listen(port, function() {

	console.log("listening on port " + port);
	
})