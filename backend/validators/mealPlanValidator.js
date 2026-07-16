const { body, validationResult } = require("express-validator");

const createMealPlanValidation = [

    body("patient").notEmpty(),

    body("breakfast").notEmpty(),

    body("lunch").notEmpty(),

    body("dinner").notEmpty(),

    body("calories").isNumeric(),

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

    createMealPlanValidation,

};