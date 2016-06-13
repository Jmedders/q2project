var express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/bands', bands = require('./routes/bands'));

// Error Handling
app.use((req, res, next) => {var err = new Error('Not Found'); err.status = 404; next(err);});
if(app.get('env') === 'development')
  app.use((err, req, res) => {res.status(err.status || 500); res.render('error', {message: err.message, error: err});});
else
  app.use((err, req, res) => {res.status(err.status || 500); res.render('error', {message: err.message, error: {}});});

module.exports = app;
