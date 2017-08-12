var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root'
});

connection.connect();

connection.query('SHOW DATABASES;', function(err, rows, fields) {
  if (err) throw err;

  console.log('Databases: ', rows);
});

connection.end();