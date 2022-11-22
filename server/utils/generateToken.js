const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    email: user.email,
    userType: user.userType,
  };
  const expiresIn = "5m";
  const jwtOptions = {
    expiresIn: expiresIn,
    algorithms: ["RS256"],
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);
  return token;
};

module.exports = generateToken;
