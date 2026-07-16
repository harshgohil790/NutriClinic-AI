const { body, validationResult } = require("express-validator");

const createPatientValidation = [

    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email required"),

    body("phone")
        .isLength({ min: 10, max: 10 })
        .withMessage("Phone number must be 10 digits"),

    body("age")
        .isInt({ min: 1 })
        .withMessage("Age must be positive"),

    body("height")
        .isFloat({ min: 1 }),

    body("weight")
        .isFloat({ min: 1 }),

    body("gender")
        .isIn(["Male", "Female", "Other"]),

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

    createPatientValidation,

};