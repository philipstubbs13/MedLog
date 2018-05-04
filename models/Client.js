// required packages
var mongoose = require ('mongoose');

const Schema = mongoose.Schema;

// the Client is NOT the User
const ClientSchema = new Schema({
  name: { type: String, unique: true, required: true },
  id: { type: String, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true },
});

// This creates our model from the above schema, using mongoose's model method
const Client = mongoose.model('Client', ClientSchema);

// Export the Client model
module.exports = Client;
