// const contents = require('../contents');
const {
  createPool
} = require('mysql');
const connection = require('../db/connection');

// connection.query
// //connect pool
// const pool = createPool({
//   host: "eu-cdbr-west-01.cleardb.com",
//   user: "bb5dfd5ac8ffb4",
//   password: "",
//   database: "test",
//   connectionLimit: 10
// });


exports.view = (req, res) => {
    // if (err) throw err;
    // console.log('Connected as ID ' + connection.threadId);

    connection.query('SELECT * FROM ingredients ', (err, rows) => {
      if (!err) {
        console.log("change");
        //return rows;
        res.render('index', {rows});
      } else {
        console.log(err);
      }
      console.log(rows);
      console.log("rows here");
    });

}

exports.insert = (req, res) => {

  res.send(req.body);
  const { ingredient, unit } = req.body;
  console.log(req.body);
  console.log(ingredient);
  console.log(unit);
    user_id = 2;

    connection.query('INSERT INTO ingredients SET user_id =? ,ingredient_name = ?, quantity =?', [user_id, ingredient, unit], (err, rows) => {

      // connection.release();
      if (!err) {
        console.log("change");
        console.log(rows);
        // return rows;
        //  res.render('index', {rows});
      } else {
        console.log(err);
      }
      console.log("rows inserted here");
    });
  

}

exports.delete = (req, res) => {
    console.log('Connected as ID ' + connection.threadId);
    // let searchTerm = req.body.search;
    // user_id = 2

    connection.query('DELETE FROM ingredients WHERE ingredient_id= ?' , [req.params.id], (err, rows) => {
      // connection.release();
      if (!err) {
         res.redirect('/');
      } else {
        console.log(err);
      }
      console.log("rows deleted here");
    });
}
