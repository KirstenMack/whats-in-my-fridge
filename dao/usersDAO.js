const { Users } = require("../models/users");
const connection = require("../db/connection");
var instance = null;

class UsersDAO {

  static getInstance() {
    return instance ? instance : new UsersDAO();
  }

  async findUserByEmail(email) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE email = ?`;
        connection.query(query, [email], (err, result) => {
          if (err) reject(new Error(err.message));
          if (result.length > 0) resolve(new Users(result));
          else resolve(undefined);
        });

      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertUser(name, email) {
    try {
      var split = name.split(" ");
      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO users SET ? `;
        connection.query(query, 
          { 
            first_name: name.substring(0, name.indexOf(" ")), 
            last_name: name.substring(name.indexOf(" ") + 1, name.length()),
            email: email
          }, (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(this.findUserByEmail(email));
          }
        );
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UsersDAO;
