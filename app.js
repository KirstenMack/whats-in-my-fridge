const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config({ path: './appconfig.env' });
const mysql = require('./db/connection');
const session = require('express-session');
const contents = require('./contents');
const mysqll = require('mysql');
const {
  createPool
} = require('mysql');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const contentsRouter = require('./routes/contents');
const ingredientsRouter = require('./routes/ingredients');
// const connection = require('./db/connection');
const app = express();

require('dotenv').config();

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    maxAge: null,
  }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/contents', contentsRouter);
app.use('/ingredient', ingredientsRouter)
app.use('/', ingredientsRouter); //sub route look here


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('3000', () => {
  console.log('Sever listening on port 3000');
});

//connect pool
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  connectionLimit: 10
});

//connect
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected as ID ' + connection.threadId);
});


///create button that will call for fridge content
//new path

module.exports = app;
