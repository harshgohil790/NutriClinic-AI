const express = require("express");

const router = express.Router();

const checkAuth = require("../middlewares/auth");

const requireRole = require("../middlewares/role");

const {

    createAppointment,

    getAppointments,

    completeAppointment,

} = require("../controllers/appointmentController");

const {

    createAppointmentValidation,

} = require("../validators/appointmentValidator");

router.post(

    "/",

    checkAuth,

    requireRole("DIETITIAN"),

    createAppointmentValidation,

    createAppointment

);

router.get(

    "/:patientId",

    checkAuth,

    requireRole("DIETITIAN"),

    getAppointments

);

router.patch(

    "/:id",

    checkAuth,

    requireRole("DIETITIAN"),

    completeAppointment

);

module.exports = router;