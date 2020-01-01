const mongoose = require("mongoose");

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provied a name"]
  },
  phone: {
    type: String,
    required: [true, "Please provied an phone number"]
  },
  roll: {
    type: Number,
    required: [true, "Please provied a roll number"]
  }
});

//craete model
const User = mongoose.model("User", userSchema);

//export User
module.exports = User;
