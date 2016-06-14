var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    knex = require('./db/knex'),
    cookieSession = require('cookie-session'),
    session = require('express-session');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/bands', bands = require('./routes/bands'));


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.use(new FacebookStrategy({
        clientID: 1733575366928508,
        clientSecret: '180c2970cb6aa78e8a2546f8774c0632',
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        knex('users').where('facebook_id', profile.id).then(function(data) {
            if (data.length === 0) {
                knex('users').insert({
                    facebook_id: profile.id,
                    user_name: profile.displayName,
                    access_token: accessToken
                }).then(function(stuff) {

                });
            } else {
                console.log('should redirect to /bands');
                // document.location='/bands';
            }
        })

        process.nextTick(function() {
            // To keep the example simple, the user's LinkedIn profile is returned to
            // represent the logged-in user. In a typical application, you would want
            // to associate the LinkedIn account with a user record in your database,
            // and return that user instead.
            done(null, {
                id: profile.id,
                displayName: profile.displayName
            });
        });
    }));


app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/bands',
        failureRedirect: '/'
    }));
// Error Handling

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development')
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
else
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

module.exports = app;
