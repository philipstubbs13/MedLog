const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// in order to create a clinic we will require the following:
// clinic name - to be populated as dropdown on doctor page
// street address, city, state and zip
// phone number and fax number


// new ClinicSchema object for login purposes
const ClinicSchema = new Schema({
  clinicname: {
    type: String,
    trim: true,
    required: 'Clinic name is required',
  },
  address: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  // `city` must be of type String
  // `city` will trim leading and trailing whitespace before it's saved
  // it is not required
  // what requirements do we have for this?
  city: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  // `state` must be of type String
  // `state` will trim leading and trailing whitespace before it's saved
  // `state` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  state: {
    type: String,
    trim: true,
    required: 'State is Required',
  },
  // `zip` must be of type String
  // `zip` will trim leading and trailing whitespace before it's saved
  // `zip` is a required field and throws a custom error message if not supplied
  // any additional requirements for this?
  zip: {
    type: Number,
    trim: true,
    required: 'Zip is Required',
  },
  // `phone` must be of type String
  // `phone` will trim leading and trailing whitespace before it's saved
  // `phone` is a required field and throws a custom error message if not supplied
  // match this format (555)-555-5555
  phone: {
    type: Number,
    trim: true,
    match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
    required: 'Phone is Required',
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method

const Clinic = mongoose.model('Clinic', ClinicSchema);

// Export the Clinic model
module.exports = Clinic;
