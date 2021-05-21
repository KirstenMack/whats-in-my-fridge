const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config({path: './appconfig.env'});
const mysql = require('./db/connection');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const ingredientRouter = require('./routes/ingredients');

const app = express();

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
app.use('/ingredients', ingredientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || '3000', () => {
	console.log('Sever listening on port ' + process.env.PORT);
});

module.exports = app;
