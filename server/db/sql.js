var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port:3306,
  database : 'aolai'
});
module.exports = connection;