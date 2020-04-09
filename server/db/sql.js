var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345678',
	// password: '123456',
	port: 3306,
	database: 'aolai'
});
connection.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected!');
});

module.exports = connection;
