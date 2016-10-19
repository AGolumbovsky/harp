var harpDB = require('../models/harpModel');

module.exports = function(app) {

	app.get('api/setup', function(req, res) {

		var starterThings = [
            {

                uno: "one   ", 
                dos: "two", 
                tres: "three"
            }, 
            {

                uno: "socond odin setup", 
                dos: " second dva setup", 
                tres: "second tri setup"
            }, 
            {

                uno: "third odin setup", 
                dos: "third dva setup", 
                tres: "third tri setup"
            }
        ];

        harpDB.create('starterThings', function(err, data) {

        	if (err) throw err;

        	res.send(data);

        });

	});

};