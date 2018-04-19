const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html
// for now this is linked normally to a doctors visit/phone call where you might need to record
// the discussion and changes to meds, what needs to be done next for the patient, etc.
// in order to create a healthlog we will require the following: date of appointment
// doctor seen, clinic, visitPurpose,
// height, weight, notes
// links to lab or summary printout
// nextAppointment

// new DoctorSchema object for login purposes
const HealthLogSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  doctor: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  // `nursename` must be of type String
  // `nursename` will trim leading and trailing whitespace before it's saved
  // it is not required
  // what requirements do we have for this?
  clinic: {
    type: String,
    trim: true,
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  visitPurpose: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  notes: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  nextAppt: {
    type: Date,
    trim: true,
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  heightIn: {
    type: Number,
    trim: true,
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  weightLb: {
    type: Number,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const HealthLog = mongoose.model('HealthLog', HealthLogSchema);

// Export the HealthLog model
module.exports = HealthLog;
