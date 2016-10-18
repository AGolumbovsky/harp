var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

// define the schema
var harpSchema = new Schema({

	typeSignal: String,

	frequency: Number 

	});

var harpDB = mongoose.model('harpDB', harpSchema);