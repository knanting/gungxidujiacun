var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '524376',
    database: 'yunshedujiacun'
});

module.exports = {
    con
}