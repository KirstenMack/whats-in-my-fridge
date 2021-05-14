const mysql = require("mysql");
const { Users } = require("../models/users");
const { dbConfig } = require("../db/connection");
const connection = mysql.createConnection(dbConfig);
connection.connect();


function findUserByEmail(email) {
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, res) => {
      if (err) console.log(err);
      if (res.length > 0) return new Users(res);
    }
  );
}

function insertUser(name, email) {
  var split = name.split(" ");
  connection.query(
    "INSERT INTO users SET ? ",
    { first_name: split[0], last_name: split[1], email: email },
    (err, res) => {
      if (err) console.log(err);
      else return findUserByEmail(email);
    }
  );
}

module.exports = {
    findUserByEmail,
    insertUser,
};
