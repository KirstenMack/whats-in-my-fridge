const mysql = require("mysql");

var dbConfig = {
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE,
  multipleStatements : true
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(dbConfig);
  connection.connect(function(err) {
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on('error', function(err) {
    // console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

function createConnection(dbconfig){
  return mysql.createConnection(dbConfig);
}

handleDisconnect();

module.exports = {
  handleDisconnect,
  createConnection,
};

