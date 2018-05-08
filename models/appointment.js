const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// To create an appointment, we will require the following: date, time
// doctor, clinic, and name of appointment.
// new AppointmentSchema object for login purposes
const AppointmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: 'Date name is required',
  },
  time: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  // this is populated by dropdown
  doctor: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  //this is reason for visit
  appointmentName: {
    type: String,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
