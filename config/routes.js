const express = require("express")

const determineGender = require("../app/middleware/gender");
const router = express.Router()

const studentCltr = require("../app/controller/studentController");

router.post("/api/student", determineGender, studentCltr.create);

module.exports = router;
