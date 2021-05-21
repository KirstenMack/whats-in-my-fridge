// const { Users } = require("../models/users");
const connection = require("../db/connection");
var instance = null;

class IngredientsDAO {

  static getInstance() {
    return instance ? instance : new IngredientsDAO();
  }

  async insertIngredient(title, description, units, user) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO ingredients SET ? `;
        connection.query(query, 
          { 
            title: title, 
            description: description,
            units: units,
            user_id: user.id,
          }, (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result);
          }
        );
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async findIngredientsByUser(user) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * FROM ingredients WHERE user_id = ?`;
        connection.query(query, [user.id], (err, result) => {
          if (err) reject(new Error(err.message));
          if (result.length > 0) resolve(result);
          else resolve(undefined);
        });

      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  
}

module.exports = IngredientsDAO;
