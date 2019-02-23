var mysql = require('mysql');

const host = "localhost";
const user = "root";
const password = "root";

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});