const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide your userName"],
      trim: true,
      minLength: 5,
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
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          });
        },
        message: "Password {VALUE} is not strong enough.",
      },
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    userType: {
      type: String,
      enum: ["admin", "teacher", "student", "editor"],
      default: "student",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const hashPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
