const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const Auth = require('./api/Auth');

// API Routes
router.use('/api', apiRoutes);
router.use("/Auth", Auth); 

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
