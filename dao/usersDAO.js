const { createConnection } = require("../db/connection");
const Users = require("../models/users");
var connection;

 function validateUser(name, email) {
    try{
        var user =  findUserByEmail(email);
        var str = name.split(" ");
        if (user === undefined) insertUser(str[0], str[1], email);
        else return findUserByEmail(email);
    }catch ( err) {
        console.error(err);
    }
 
}

async function findUserByEmail(email) {
  connection = createConnection();
  connection.query(
    "SELECT email FROM users WHERE email = ?",
    [email],
    (err, res) => {
      if (err) console.log(err);
      if (res.length > 0)
        return new Users(
          res[0].id,
          res[0].first_name,
          res[0].last_name,
          res[0].email
        );
      else return null;
    }
  );
}

function insertUser(firstName, lastName, email) {
  connection = createConnection();
  connection.query(
    "INSERT INTO users SET ? ",
    { frist_name: firstName, last_name: lastName, email: email },
    (err, res) => {
      if (err) console.log(err);
    }
  );
}

module.exports = {
  validateUser,
  findUserByEmail,
  insertUser,
};
