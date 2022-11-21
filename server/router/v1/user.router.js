const express = require("express");
const userController = require("../../controller/userController");
const router = express.Router();

router.post("/signup", userController.signup);
router.get("/", userController.getUsers);
router.route("/:id").delete(userController.deleteUserById).patch();

module.exports = router;
