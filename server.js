var express = require('express');

var port = 8778;

var app = express();

// app.use(); // serve static files

app.listen(port, function() {

	console.log("listening on port " + port);

});