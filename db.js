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

connection.askQuery = (query) => new Promise((resolve, reject) => {
    connection.query(query, (error, result, fields) => {
        if(error)
            reject(error);
        else
            resolve(result);
    });    
});

module.exports = connection;