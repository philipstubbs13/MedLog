const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new SymptomSchema object for saving symptoms.
const prescriptionSchema = new Schema({
  prescriptionName: {
    type: String,
    trim: true,
    required: 'Prescription is required.',
  },
  amount: {
    type: String,
    trim: true,
    required: 'Amount is required, please specify strength and dosing infomration',
  },
  timesaday: {
    type: Number,
    trim: true,
    required: 'Times a day is required',
  },
  dateprescribed: {
    type: String,
    trim: true,
    required: 'Date prescribed is required',
  },
  doctorprescribed: {
    type: String,
    trim: true,
    required: 'Doctor prescribed is required',
  },
  generalinstructions: {
    type: String,
    trim: true,
    required: 'General prescription instructions are required',
  },
});

// This creates our model from the above schema, using mongoose's model method
const PrescriptionList = mongoose.model('PrescriptionList', prescriptionSchema);

// Export the PrescriptionList model
module.exports = PrescriptionList;
