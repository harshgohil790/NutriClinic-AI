const express = require("express");

const router = express.Router();

const {

    createPatient,

    getPatients,
    getPatient,
} = require("../controllers/patientController");

const checkAuth = require("../middlewares/auth");

const requireRole = require("../middlewares/role");

const {
    createPatientValidation,
} = require("../validators/patientValidator");

router.post(

"/",

checkAuth,

requireRole("DIETITIAN"),

createPatientValidation,

createPatient

);

router.get(

    "/",

    checkAuth,

    requireRole("DIETITIAN"),

    getPatients

);
router.get(

    "/:id",

    checkAuth,

    requireRole("DIETITIAN"),

    getPatient

);

module.exports = router;