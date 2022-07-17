var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "toot",
  password: "CHaw87@$"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});