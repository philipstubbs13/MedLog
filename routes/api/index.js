const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const appointmentRoutes = require('./appointments');
const doctorRoutes = require('./doctors');
const clinicRoutes = require('./clinics');
const logRoutes = require('./logs');

// Symptoms 
router.use('/symptoms', symptomRoutes);

// Appointments
router.use('/appointments', appointmentRoutes);

// Doctors
router.use('/doctors', doctorRoutes);

// Logs
router.use('/logs', logRoutes);

// Clinics
router.use('/clinics', clinicRoutes);

module.exports = router;
