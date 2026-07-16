const {

    body,

    validationResult,

} = require("express-validator");

const createAppointmentValidation = [

    body("patient")

        .notEmpty()

        .withMessage("Patient is required"),

    body("date")

        .notEmpty()

        .withMessage("Date is required"),

    body("time")

        .notEmpty()

        .withMessage("Time is required"),

    body("purpose")

        .notEmpty()

        .withMessage("Purpose is required"),

    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                success: false,

                errors: errors.array(),

            });

        }

        next();

    }

];

module.exports = {

    createAppointmentValidation,

};