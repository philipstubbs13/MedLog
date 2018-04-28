var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define access tokens (allows app client to make requests on behalf of the user)
const TokenSchema = new Schema({
  value: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required, true },
});

// Export the token model
const Token = mongoose.model('Token', TokenSchema);
module.exports = Token;
