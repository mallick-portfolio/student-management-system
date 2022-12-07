const express = require("express");
const studentController = require("../../controller/studentController");
const router = express.Router();

// router.route("").get(studentController.getStudents).post();
router
  .route("/")
  .get(studentController.getStudents)
  .post(studentController.addNewStudent);
// router.route("/:id").get().patch().delete(studentController.deleteUserById);
router.delete(
  "/:roll/:registration",
  studentController.deleteStudentByRollandReg
);

module.exports = router;
