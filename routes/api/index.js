const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const appointmentRoutes = require('./appointments');
const logRoutes = require('./logs');

// Symptoms 
router.use('/symptoms', symptomRoutes);

// Appointments
router.use('/appointments', appointmentRoutes);

// Logs
router.use('/logs', logRoutes);

module.exports = router;
