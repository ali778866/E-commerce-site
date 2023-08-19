const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // your database server address here,
    user: 'root', 
    database: 'node-new',
    password: 'Ali@9934'
})

module.exports = pool.promise();