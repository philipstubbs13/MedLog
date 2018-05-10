const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const Auth = require('./api/Auth');

// a function which takes a passport and returns a router
module.exports = function(passport, User) {
  // API Routes
  router.use('/api', apiRoutes(passport));
  router.use('/Auth', Auth(passport, User)); 

  // If no API routes are hit, send the React app
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  return router
}

// const path = require('path');
// const router = require('express').Router();
// const apiRoutes = require('./api');

// // API Routes
// router.use('/api', apiRoutes);

// // If no API routes are hit, send the React app
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// module.exports = router;