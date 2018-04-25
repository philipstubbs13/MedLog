const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// in order to create a doctor we will require the following: first and last name
// clinic associated with - as dropdown
// nurse name for further contact
// specialty
// new DoctorSchema object for login purposes
const DoctorSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  lastname: {
    type: String,
    trim: true,
    required: 'Last name is required',
  },
  clinic: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Doctor = mongoose.model('Doctor', DoctorSchema);

// Export the Doctor model
module.exports = Doctor;
