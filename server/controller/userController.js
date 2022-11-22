const userServices = require("../services/userServices");
const { validationResult } = require("express-validator");
const generateToken = require("../utils/generateToken");
exports.getUsers = async (req, res, next) => {
  try {
    const result = await userServices.getUsersServices();
    if (!result) {
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

exports.getUser = async (req, res, next) => {
  try {
    const user = await userServices.getUserServices(req.email);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        error: "Auothorization access",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User information get successfull",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const existUser = await userServices.findUserByEmail(req.body.email);
    const existName = await userServices.checkUserName(req.body.userName);

    if (existUser) {
      return res.status(200).json({
        status: "fail",
        error: "User already exist with this email",
      });
    }
    if (existName) {
      return res.status(200).json({
        status: "fail",
        error:
          "This username already is already exist. Please provide another one",
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
        status: "success",
        message: "Your Signup Successfull",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await userServices.findUserByEmail(req.body.email);

    if (!user) {
      return res.status(202).json({
        status: "fail",
        error: "User not found with this Email",
      });
    }

    const password = userServices.hashPassword(
      req.body.password,
      user.password
    );
    if (!password) {
      return res.status(202).json({
        status: "fail",
        error: "Your password is not correct.Please provide valid password",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      status: "success",
      message: "Your Login Successfull",
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

exports.signout = async (req, res, next) => {
  try {
    const user = await userServices.findUserByEmail(req.email);

    if (!user) {
      return res.status(202).json({
        status: "fail",
        error: "User not found with this Email",
      });
    }

    const result = await userServices.signOutServices(req.email, req.body);

    if (!result) {
      return res.status(202).json({
        status: "fail",
        error: "Failed to signout",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Signout Successful",
    });
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
