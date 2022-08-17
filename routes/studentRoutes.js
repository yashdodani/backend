const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authController = require("../controllers/authController");
const app = require("./../app");

router.route("/").get(studentController.welcomeStudent); // 127.0.0.1/api/v1/student

router.post("/signup", authController.signUpStudent);

router.route("/self-assessment/").get(studentController.selfAssessmentWelcome);

router.get("/self-assessment/:id", studentController.selfAssessmentTest)

router.post("/self-assessment",studentController.self);
// .post(studentController.selfAssessmentWork);

module.exports = router;
