// database/db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senhadificil',
  database: 'mvc_db',
});

module.exports = connection;
