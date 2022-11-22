const express = require("express");
const userController = require("../../controller/userController");
const authorization = require("../../middleware/authorization");
const verifyUser = require("../../middleware/verifyUser");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get(
  "/",
  verifyUser,
  authorization("admin", "teacher"),
  userController.getUsers
);
router.route("/:id").delete(userController.deleteUserById).patch();

module.exports = router;
