const studentServices = require("../services/studentServices");

exports.getStudents = async (req, res, next) => {
  try {
    const result = await studentServices.getStudentServices();
    console.log(result);
    if (!result) {
      res.status(402).json({
        status: "Fail",
        error: "Failed to get students",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Students find successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.addNewStudent = async (req, res, next) => {
  try {
    const { roll, registration } = req.body;
    const existStudent = await studentServices.getStudentByRollServices(roll);
    console.log(existStudent);
    if (existStudent) {
      return res.status(403).json({
        status: "Fail",
        error: "Student already exit with the roll or registration",
      });
    }
    const result = await studentServices.addNewStudentServices(req.body);
    if (!result) {
      res.status(404).json({
        status: "Fail",
        error: "Failed to add student with this roll or registration",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Students find successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteStudentByRollandReg = async (req, res, next) => {
  try {
    const { roll, registration } = req.params;
    const existStudent = await studentServices.getStudentByRollServices(roll);
    console.log(existStudent);
    if (!existStudent) {
      return res.status(403).json({
        status: "Fail",
        error: "Student not found with this roll or registration",
      });
    }
    const result = await studentServices.deleteStudentByRollServices(
      roll,
      registration
    );
    if (!result) {
      res.status(404).json({
        status: "Fail",
        error: "Failed to delete student with this roll or registration",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Students deleted successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
