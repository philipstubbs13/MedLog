var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// token schema for storing authorization codes from oauth2
const codeSchema = new Schema({
  value: { type: String, required: true },
  redirectUri: {type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true },
});

// This creates our model from the above schema, using mongoose's model method
const Code = mongoose.model('Code', codeSchema);

// Export the AuthCode model
module.exports = Code;
