// const contents = require('../contents');

// exports.fetchContent= (req, res) => {
//     // res.json(contents);
//     console.log(contents);
//     res.send('index', {
//         title: 'Whats in my fridge?',
//         contents:contents
//     });

const connection = require("../db/connection");
exports.view = async (req, res) => {
  //  res.render('index');

  console.log("hey2");

  //connect to db
  //  const user = req.session.authID;

  connection.query("SELECT * FROM users", (err, rows) => {
    // connection.release();
    console.log("heye");
    if (!err) {
      console.log("change");
      // console.log(rows);
      // res.render('index', {rows});
    } else {
      console.log(err);
    }
    console.log("the data from the user table: \n", rows);
  });

  //  pool.getConnection((err, connection) =>{
  //     if(err) throw err;
  //     console.log("connected. " + connection.threadId);

  //     console.log("hey")
  //     connection.query('SELECT * FROM user', (err,rows) =>{
  //         // connection.release();
  //         console.log("heye");
  //         if(!err) {
  //             console.log("hey")
  //             res.send({rows});
  //         } else {
  //             console.log(err);
  //         }

  //         console.log("the data from the user table: \n", rows);
  //     });
  //   });
};
