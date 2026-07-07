const express = require("express");

const router = express.Router();

const {
    login,
    logout,
    me,
} = require("../controllers/authController");

const checkAuth = require("../middlewares/auth");

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", checkAuth, me);

module.exports = router;