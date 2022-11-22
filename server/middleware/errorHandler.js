exports.errorHander = async (error, req, res, next) => {
  res.status(500).json({
    status: "fail",
    message: error.message,
    error,
  });
};

exports.notFoundHandler = async (req, res, next) => {
  res.status(404).json({
    message: `Ohh sorry, your accessing path ${req.originalUrl} is not available)`,
  });
};
