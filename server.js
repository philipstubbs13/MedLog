const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

// USER AUTH REQUIREMENTS:
//const passport = require('./passport');

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require all models
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

// USE PASSPORT:
// app.use(passport.initialize());


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
// app.get('/', (req, res, next) => {
//   res.json('req.user is: ' + req.user)
// })
// app.post('/login',
//   passport.authenticate('local', { failureRedirect: '/' }), (req, res) => res.json('logged in!'))
// app.post('/logout', (req, res) => { req.logout(); res.redirect('/'); })

// app.post('/signup', (req, res, next) => {
//   var user = new User({ username: req.body.username, password: req.body.password })
//   user.save().then(data => console.log(data)).catch(err => console.log(err))
//   res.redirect('/')
// })
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });
// app.get('/profile',
//   passport.authenticate('bearer', { session: false }),
//   function (req, res) {
//     res.json(req.user);
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


// Route for saving a new Health Log to the db and associating it with a User
app.post('/submit', function (req, res) {
  // Create a new Note in the db
  db.healthLog.create(req.body)
    .then(function (dbHealthLog) {
      // If a Health Log was created successfully,
      // find one User and push the new Log's _id to the User's `healthLog` array
      // { new: true } tells the query that we want it to return the updated User --
      // it returns the original by default
      // Since our mongoose query returns a promise, we can chain another
      // `.then` which receives the result of the query
      return db.User.findOneAndUpdate({}, { $push: { notes: dbHealthLog._id } }, { new: true });
    })
    .then(function (dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to get all User's and populate them with their notes
app.get('/populateduser', function (req, res) {
  // Find all users
  db.User.find({})
    // Specify that we want to populate the retrieved users with any associated notes
    .populate('healthLog')
    .then(function (dbUser) {
      // If able to successfully find and associate all Users and Health Logs,
      // send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');

// If deployed, use the deployed database. Otherwise use the local reacthealthtracker database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reacthealthtracker";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
