const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  console.log(decoded)
  if (!decoded) {
    return next("Auothorization access from verification");
  } else {
    req.email = decoded.email;
    req.userType = decoded.userType;
    next();
  }
};

module.exports = verifyUser;
