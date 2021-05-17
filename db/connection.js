const mysql = require("mysql");
var dbConfig = {
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE,
  connectionLimit: 10,
  multipleStatements : true
};
const connection = mysql.createPool(dbConfig );

module.exports = connection;

