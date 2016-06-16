var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    knex = require('./db/knex'),
    // cookieSession = require('cookie-session'),
    session = require('express-session');
require('dotenv').config();

// Base
app.set("views", __dirname + "/views"); // Sets view directory.
app.set('view engine', 'hbs'); // Sets view engine to handlebars.
app.use(bodyParser.json()); // Parses JSON.
app.use(bodyParser.urlencoded({
    extended: false
})); // Parses UTF8.
app.use(cookieParser()); // Parses cookies.
app.use(express.static(__dirname + "/public")); // Sets static file directory.

// Auth
var FBAPI = { // Should probably put some of this stuff in the .env
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    redirects: {
        successRedirect: '/bands',
        failureRedirect: '/'
    }
};




passport.use(new FacebookStrategy(FBAPI, (accessToken, refreshToken, profile, done) => { // Tells passport to use facebook.
    if (!profile) return done(null);
    // If it doesn't work run the failureRedirect.
    var user = {
        // This will be the user object you send client side.
        fbid: profile.id,
        displayName: profile.displayName
    };

    knex('users').where('facebook_id', profile.id).then(data => {
        if (data.length) {
            var userid = data[0]['id'];
            user.id = userid;

            return done(null, user);
        }
        var newUser = {
            facebook_id: profile.id,
            user_name: profile.displayName,
            access_token: accessToken,
            display_name: profile.displayName
        };
        knex('users').insert(newUser).then(() => done(null, user)); // Adds newUser to db and calls done.
    });
}));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // Initializes session middleware.
app.use(passport.initialize()); // Initializes passport.
app.use(passport.session()); // Sets up session with passport.

passport.serializeUser((user, cb) => cb(null, user)); // Puts passport user into session.
passport.deserializeUser((obj, cb) => cb(null, obj)); // Takes passport user out of session.

var getBandData = require("./temp.js").getBandData; // This is just for getting the mock data.




app.use((req, res, next) => {
  res.locals.bands = [getBandData(0)]; // Get a list of some bands and assign it to locals object, which is available everywhere.

    if (req.session.passport) { // If using Facebook OAuth
      res.locals.user = {
        user_id: req.session.passport.user.id,
        name: req.session.passport.user.displayName
      };
    }
    else if (req.session.user_id) { // If using regular login
        res.locals.user = {
            user_id: req.session.user_id,
            name: req.session.display_name
        };
    } else { // If logged out
        res.locals.user = null;
    }
    next();
});




//Routes
app.get('/auth/facebook/callback', passport.authenticate('facebook', FBAPI.redirects)); // Runs facebook auth at this route.
app.use('/', require('./routes/index')); // Pulls router from index.
app.use('/users', require('./routes/users')); // Pulls router from users.
app.use('/bands', require('./routes/bands')); // Pulls router from bands.
app.use('/songs', require('./routes/songs')); // Pulls router from songs.
app.use('/setlists', require('./routes/setlists')); // Pulls router from setlists.


// Error Handling
app.use((req, res, next) => { // If no other route runs this will 404.
    var err = new Error('Not Found'); // Creates an error.
    err.status = 404; // Sets status.
    next(err); // Passes it to the next function.
});

app.use((err, req, res) => { // Anything that errors should go here.
    res.status(err.status || 500); // Set res status to error status or 500 for server fuckup.
    res.render('error', {
        message: err.message,
        error: err
    }); // Render the error.
});

var port = parseInt(process.env.PORT || '3000'); // Get port from environment.
app.set('port', port); // Set port in express.
app.listen(port); // Listen to port.
