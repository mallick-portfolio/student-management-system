const Student = require("../model/StudentModel");

exports.getStudentServices = async () => {
  const result = await Student.find({});
  return result;
};

exports.getStudentByRollServices = async (roll) => {
  const result = await Student.findOne({ roll: roll });
  console.log(result, roll);
  return result;
};

exports.addNewStudentServices = async (data) => {
  const result = await Student.create(data);
  return result;
};

exports.deleteStudentByRollServices = async (roll, registration) => {
  const result = await Student.deleteOne({
    roll: roll,
    registration: registration,
  });
  return result;
};
