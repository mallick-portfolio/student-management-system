const authorization = (...data) => {
  return (req, res, next) => {
    if (!data.includes(req.userType)) {
      return res.status(400).json({
        status: "fail",
        error: "Auothorization access",
        message: "Please try to access valid.",
      });
    }
    next();
  };
};

module.exports = authorization;
