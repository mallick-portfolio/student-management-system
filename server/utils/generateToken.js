const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    email: user.email,
    userType: user.userType,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7days",
  });
  return token;
};

module.exports = generateToken;
