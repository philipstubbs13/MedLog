var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//more about RegEx Patterns here https://www.regexbuddy.com/regex.html

//in order to create a doctor we will require the following: 
//first and last name
//clinic associated with - as dropdown
//nurse name for further contact
//specialty


// new DoctorSchema object for login purposes
var DoctorSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: "First name is required"
  },
  lastname: {
    type: String,
    trim: true,
    required: "First name is required"
  },
  // `nursename` must be of type String
  // `nursename` will trim leading and trailing whitespace before it's saved
  //it is not required
  //what requirements do we have for this?
  nursename: {
    type: String,
    trim: true
  },
  // `specialty` must be of type String
  // `specialty` will trim leading and trailing whitespace before it's saved
  // `specialty` is a required field and throws a custom error message if not supplied
  //any additional requirements for this?
  specialty: {
    type: String,
    trim: true,
    required: "Specialty is Required"
  },
  
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Doctor = mongoose.model("Doctor", DoctorSchema);

// Export the Doctor model
module.exports = Doctor;