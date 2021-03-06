// Set up MySQL connection.
const mysql = require('mysql');
console.log(process.env.NODE_ENV === 'development', process.env.NODE_ENV)
const connection = mysql.createConnection(require('./db-config'));

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
