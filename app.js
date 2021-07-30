const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const adminRouter = require('./routes/admin');
const produkRouter = require('./routes/produk');
const contactRouter = require('./routes/contact');
const fiturRouter = require('./routes/fitur');
const teamRouter = require('./routes/team');

app.use('/admin', adminRouter);
app.use('/produk', produkRouter);
app.use('/contact', contactRouter);
app.use('/fitur', fiturRouter);
app.use('/team', teamRouter);

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

module.exports = app;
