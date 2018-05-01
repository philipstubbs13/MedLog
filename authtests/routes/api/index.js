const router = require('express').Router();
const loginRoutes = require('./login');

// login
router.use('/login', loginRoutes);

module.exports = router;
