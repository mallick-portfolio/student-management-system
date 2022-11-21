const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const { errorHander, notFoundHandler } = require("./middleware/errorHandler");
require("dotenv").config();
const userRouter = require("./router/v1/user.router");
const dbConnection = require("./server");

// build in middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello guyes");
});

// db connection
dbConnection();
// custom api route
app.use("/api/v1/user", userRouter);

app.use(notFoundHandler);
// error handler middleware
app.use(errorHander);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`.bold.red);
});
