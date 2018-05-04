const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const passport = require('passport')
const User = require('./models/user')
const passport = require('passport-strategy')
const Strategy = require('passport-http-bearer').Strategy;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('You are connected!')
});

// USER AUTH REQUIREMENTS:
const passport = require('./passport');
const session = require('express-session')

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require all models
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// USER AUTH USE EXPRESS SESSIONS & PASSPORT:
app.use(session({secret:'big secret'}));
app.use(passport.initialize());

passport.use(new BearerStrategy(
  function(token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));

function Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  if (!verify) { throw new TypeError('HTTPBearerStrategy requires a verify callback'); }

  passport.Strategy.call(this);
  this.name = 'bearer';
  this._verify = verify;
  this._realm = options.realm || 'Users';
  if (options.scope) {
    this._scope = (Array.isArray(options.scope)) ? options.scope : [ options.scope ];
  }
  this._passReqToCallback = options.passReqToCallback;
}
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent
// duplicate users from being added to the server
// db.User.create({
//   firstname: 'John',
//   lastname: 'Doe',
//   username: 'myusername',
//   password: 'mypassword',
//   email: 'myemail@gmail.com',
//  })
//   .then(function(dbUser)
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });


// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});


// Route for retrieving all Users from the db
app.get('/user', function (req, res) {
  // Find all Users
  db.User.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
