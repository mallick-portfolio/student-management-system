const express = require("express");
const userController = require("../../controller/userController");
const authorization = require("../../middleware/authorization");
const verifyUser = require("../../middleware/verifyUser");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.patch("/signout", verifyUser, userController.signout);
router.get("/me", verifyUser, userController.getUser);
router.get(
  "/",
  // verifyUser,
  // authorization("admin", "teacher", "student"),
  userController.getUsers
);
router.route("/:id").delete(userController.deleteUserById).patch();

module.exports = router;
