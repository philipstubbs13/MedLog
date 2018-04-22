const router = require('express').Router();
const symptomRoutes = require('./symptoms');

// Book routes
router.use('/symptoms', symptomRoutes);

module.exports = router;
