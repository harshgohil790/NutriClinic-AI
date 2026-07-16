const MealPlan = require("../models/MealPlan");

async function createMealPlan(req, res) {

    try {

        const mealPlan = await MealPlan.create({

            ...req.body,

            createdBy: req.user._id,

        });

        return res.status(201).json({

            success: true,

            mealPlan,

        });

    }

    catch (err) {

        console.log(err);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

}

async function getMealPlans(req, res) {

    try {

        const mealPlans = await MealPlan.find({

            patient: req.params.patientId,

        });

        return res.json({

            success: true,

            mealPlans,

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

}

module.exports = {

    createMealPlan,

    getMealPlans,

};