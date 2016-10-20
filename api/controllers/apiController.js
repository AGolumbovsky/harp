var bodyParser = require('body-parser');
var harpDB = require('../models/harpModel');

module.exports = funcion(app) {

	app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
	

    // get all data
    app.get('/api/all', funcion(req, res) {

    	harpDB.find({}, function(err, data) {

    		if(err) throw err;

    		res.send(data);

    		console.log("here is one item: " + data[0]);

    	});

    });

}