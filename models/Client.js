// required packages
var mongoose = require ('mongoose');

const Schema = mongoose.Schema;

// the client is NOT the User
const ClientSchema = new Schema({
  name: { type: String, unique: true, required: true },
  id: { type: String, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true }
});

const Client = mongoose.model('Client', ClientSchema);

// Export the User model
module.exports = Client;
