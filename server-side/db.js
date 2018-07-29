const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'sparepartdb'
});

connection.connect((err)=>{
if(err)
console.log("Connection failed due to "+JSON.stringify(err));
else
console.log("Connected to the Database..");
});

module.exports = connection;