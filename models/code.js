var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// token schema for storing authorization codes from oauth2
const CodeSchema = new Schema({
  value: { type: String, required: true },
  redirectUri: {type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true },
});

// Export the Code model
const Code = mongoose.model('Code', CodeSchema);
module.exports = Code;
