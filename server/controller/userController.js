const userServices = require("../services/userServices");
const { validationResult } = require("express-validator");
exports.getUsers = async (req, res, next) => {
  try {
    const result = await userServices.getUsers();
    if (result.length < 0) {
      res.status(402).json({
        status: "fail",
        error: "Failed to get users",
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "User find successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    const result = await userServices.signUpServices(req.body);
    if (!result._id) {
      res.status(402).json({
        status: "fail",
        error: "Failed to add user",
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "User added successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const result = await userServices.deleteUserById(req.params.id);
    if (!result) {
      res.status(402).json({
        status: "fail",
        error: "Can't find the user",
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
