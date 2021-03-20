var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const requestLogger = require('./middleware/requestLogger');
const cors = require('cors');
const compression = require('compression');

var indexRouter = require('./routes/index');
const visionRouter = require('./routes/vision');
const spotifyRouter = require('./routes/spotify');
const youtubeRouter = require('./routes/youtube');

var app = express();

app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(requestLogger);

app.use('/', indexRouter);
app.use('/api/vision', visionRouter);
app.use('/api/spotify', spotifyRouter);
app.use('/api/youtube', youtubeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({ error: 'The requested URL was not found on this server.'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: 'Oops! Something went wrong.'});
});

module.exports = app;
