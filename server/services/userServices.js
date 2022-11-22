const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
exports.getUsersServices = async () => {
  const result = await User.find({}).select("-password");
  return result;
};
exports.getUserServices = async (email) => {
  const result = await User.findOne({ email }).select("-password");
  return result;
};

exports.signUpServices = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.loginServices = async (data) => {
  const result = await User.findOne(data);
  return result;
};
exports.signOutServices = async (email, data) => {
  const result = await User.updateOne({ email }, data, {
    runValidators: true,
  });
  return result;
};

exports.deleteUserById = async (id) => {
  const result = await User.deleteOne({ _id: id });
  if (result.deletedCount === 1) {
    return result;
  } else {
    return false;
  }
};

exports.findUserByEmail = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
exports.checkUserName = async (userName) => {
  const result = await User.findOne({ userName });
  return result;
};

exports.updateLogin = async (email, data) => {
  const result = await User.updateOne({ email }, data, {
    runValidators: true,
  });
  return result;
};

exports.hashPassword = (password, userPassowrd) => {
  return bcrypt.compareSync(password, userPassowrd);
};
