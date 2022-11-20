const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const teacherSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  contactNumber: {
    type: String,
  },
  presentAddress: String,
  parmanentAddress: String,
  bloodGroup: {
    type: String,
  },
  userId: {
    type: ObjectId,
    ref: "User",
  },
  researchId: {
    type: ObjectId,
    ref: "Research",
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
