const mysql = require('mysql');

// db에 접속
const connection = mysql.createConnection(require('./private/mysql_id'));

connection.connect((err) => {
    if(err) {
        console.log('failed to connect MySQL');
        console.log(err);
    }
    else
        console.log('connected to MySQL');
});

module.exports = connection;