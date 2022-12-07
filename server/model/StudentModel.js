const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  registration: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
  },
  presentAddress: String,
  parmanentAddress: String,
  bloodGroup: {
    type: String,
  },
  session: {
    type: String,
    required: true,
  },
  resultId: {
    type: ObjectId,
    ref: "Result",
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
