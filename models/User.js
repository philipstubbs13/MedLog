var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var UserSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    unique: true
  },

  // `healthlogs` is an array that stores ObjectIds (thses are linked to the healthlog model)
  healthlogs: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the healthlog model
      ref: "healthlog"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
