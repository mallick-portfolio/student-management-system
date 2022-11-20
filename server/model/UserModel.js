const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide your userName"],
    trim: true,
    lowercase: true,
    unique: [true, "Already name exist"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    lowercase: true,
    unique: [true, "Already email exist"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        validator.isStringPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minNumbers: 1,
          minUppercase: 1,
          minSymbols: 1,
        });
        message: "Password {VALUE} is not strong enough.";
      },
    },
  },
  userType: {
    type: String,
    enum: ["admin", "teacher", "student", "editor"],
    default: "student",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
