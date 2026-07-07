const express = require("express");

const router = express.Router();

const {

    createPatient,

    getPatients,

} = require("../controllers/patientController");

const checkAuth = require("../middlewares/auth");

const requireRole = require("../middlewares/role");

router.post(

    "/",

    checkAuth,

    requireRole("DIETITIAN"),

    createPatient

);

router.get(

    "/",

    checkAuth,

    requireRole("DIETITIAN"),

    getPatients

);

module.exports = router;