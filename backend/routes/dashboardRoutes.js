const express = require("express");

const router = express.Router();

const checkAuth = require("../middlewares/auth");
const requireRole = require("../middlewares/role");

const {
    getDashboard,
} = require("../controllers/dashboardController");

router.get(
    "/",
    checkAuth,
    requireRole("DIETITIAN"),
    getDashboard
);

module.exports = router;