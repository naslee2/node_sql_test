var mysql = require('mysql');

const host = "localhost";
const user = "root";
const password = "root";

var sql_connect = mysql.createConnection({
  host: host,
  user: user,
  password: password
});

sql_connect.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});