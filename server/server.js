const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    const res = mongoose.connect(process.env.DATABASE);
    if (res) {
      console.log("Database connection successfull".underline.bold.blue);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
