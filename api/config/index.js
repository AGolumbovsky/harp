// require json file with the DB credentials
var configValues = require('./config');

modules.exports = {

	getDBConnectionString: function() {

		return 'mongodb://' + configValues.user + ':' + configValues.password + 'provide valid password';

	}

}