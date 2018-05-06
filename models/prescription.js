const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new prescriptionSchema object for saving prescriptions.
const prescriptionSchema = new Schema({
  prescriptionName: {
    type: String,
    trim: true,
    required: 'Prescription name is required.',
  },
  amount: {
    type: String,
    trim: true,
    required: 'Amount is required, please specify strength and dosing infomration',
  },
  dateprescribed: {
    type: String,
    trim: true,
  },
  doctorprescribed: {
    type: String,
    trim: true,
    required: 'Doctor prescribed is required',
  },
  generalinstructions: {
    type: String,
    trim: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Prescription = mongoose.model('Prescription', prescriptionSchema);

// Export the PrescriptionList model
module.exports = Prescription;
