const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const appointmentRoutes = require('./appointments');

// Symptoms 
router.use('/symptoms', symptomRoutes);

// Appointments
router.use('/appointments', appointmentRoutes);

module.exports = router;
