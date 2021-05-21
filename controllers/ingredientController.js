
const connection = require('../db/connection');

exports.view = (req, res) => {
    connection.query('SELECT * FROM ingredients ', (err, rows) => {
      if (err) reject(new Error(err.message));
      else  res.render('index', {rows});
    });

}

exports.delete = (req, res) => {
  user_id = 2;
  connection.query('DELETE FROM ingredients WHERE ingredient_id= ?' , [req.params.id], (err, rows) => {
    if (err) reject(new Error(err.message));
    else  res.redirect('/');
    console.log("rows deleted here");
  });
  res.redirect('/');
}


exports.insert = (req, res) => {

  console.log("delete here");
  const { ingredient, description,unit } = req.body;
  user_id = 2;
  connection.query('INSERT INTO ingredients SET title = ?, description = ?,units =?', [ingredient, description ,unit,user_id], (err, rows) => {
    if (err) reject(new Error(err.message));
    else  res.redirect('/');
  });

}
// exports.insert = (req, res) => {

//   res.send(req.body);
//   const { ingredient, description,unit } = req.body;
//   console.log(req.body);
//   console.log(ingredient);
//   console.log(unit);
//     user_id = 2;

//     connection.query('INSERT INTO ingredients SET title = ?, description = ?,units =?', [ingredient, description ,unit,user_id], (err, rows) => {

//       // connection.release();
//       if (!err) {
//         console.log("inserting attempt");
//         console.log(rows);
//         res.redirect('/');
//         // return rows;
//         //  res.render('index', {rows});
//       } else {
//         console.log(err);
//       }
//       console.log("rows inserted here");
//     });

// }

// exports.delete = (req, res) => {
//     console.log('Connected as ID ' + connection.threadId);
//     // let searchTerm = req.body.search;
//     // user_id = 2

//     connection.query('DELETE FROM ingredients WHERE ingredient_id= ?' , [req.params.id], (err, rows) => {
//       // connection.release();
//       if (!err) {
//          res.redirect('/');
//       } else {
//         console.log(err);
//       }
//       console.log("rows deleted here");
//     });
// }

// exports.view = async (req, res) => {
//   // if (err) throw err;
//   // console.log('Connected as ID ' + connection.threadId);

//   connection.query('SELECT * FROM ingredients ', (err, rows) => {
//     if (!err) {
//       console.log("change");
//       //return rows;
//       res.render('index', {rows});
//     } else {
//       console.log("rows here");
//       console.log(err);
//     }
//     console.log(rows);
//     // console.log("rows here");
//   });

// }