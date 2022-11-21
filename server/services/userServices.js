const User = require("../model/UserModel");

exports.getUsers = async () => {
  const result = await User.find({});
  return result;
};

exports.signUpServices = async (data) => {
  const result = await User.create(data);
  return result;
};

exports.deleteUserById = async (id) => {
  const result = await User.deleteOne({ _id: id });
  if (result.deletedCount === 1) {
    console.log(result);
    return result;
  } else {
    return false;
  }
};

exports.findUserByEmail = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
