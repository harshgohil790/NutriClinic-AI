const express = require("express");

const router = express.Router();

const {

    createMealPlan,

    getMealPlans,

} = require("../controllers/mealPlanController");

const {

    createMealPlanValidation,

} = require("../validators/mealPlanValidator");

const checkAuth = require("../middlewares/auth");

const requireRole = require("../middlewares/role");

router.post(

    "/",

    checkAuth,

    requireRole("DIETITIAN"),

    createMealPlanValidation,

    createMealPlan

);

router.get(

    "/:patientId",

    checkAuth,

    requireRole("DIETITIAN"),

    getMealPlans

);

module.exports = router;