const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     firstName: { type: String, required: true },
     lastName: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     gender: { type: String, enum: ["Male", "Female", "Other"] },
     phone: { type: String },
     address: { type: String },

     resetPasswordToken: {
          type: String,
     },

     resetPasswordExpires: {
          type: Date,
     },
});

module.exports = mongoose.model("User", userSchema);
