const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new SymptomSchema object for saving symptoms.
const SymptomSchema = new Schema({
  symptomType: {
    type: String,
    trim: true,
    required: 'Type is required.',
  },
  symptomDate: {
    type: String,
    trim: true,
    required: 'Date is required.',
  },
  symptomTime: {
    type: String,
    trim: true,
    required: 'Time is required',
  },

  symptomInfo: {
    type: String,
    trim: true,
    required: 'Note is required',
  },
});

// This creates our model from the above schema, using mongoose's model method
const SymptomJournal = mongoose.model('SymptomJournal', SymptomSchema);

// Export the SymptomJournal model
module.exports = SymptomJournal;
