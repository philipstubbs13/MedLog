const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const appointmentRoutes = require('./appointments');
const doctorRoutes = require('./doctors');
const logRoutes = require('./logs');
const doctorRoutes = require('./doctors');

// Symptoms 
router.use('/symptoms', symptomRoutes);

// Appointments
router.use('/appointments', appointmentRoutes);

// Doctorss
router.use('/doctors', doctorRoutes);

// Logs
router.use('/logs', logRoutes);

// Doctors
router.use('/doctors', doctorRoutes);

module.exports = router;
