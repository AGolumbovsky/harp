var express = require('express');

var port = process.env.PORT || 8778;

var app = express();

// server static files
app.use('/', express.static(__dirname + '/public'));

app.listen(port, function() {

	console.log("listening on port " + port);

});