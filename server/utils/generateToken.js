const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7days",
  });
  console.log(token);
  return token;
};

module.exports = generateToken;
