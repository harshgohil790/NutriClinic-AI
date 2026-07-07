const User = require("../models/User");
const { createToken } = require("../services/authService");

async function login(req, res) {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).json({
                success: false,
                message: "User not found",
            });

        if (!user.comparePassword(password))
            return res.status(401).json({
                success: false,
                message: "Incorrect Password",
            });

        const token = createToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
        });

        return res.json({
            success: true,
            message: "Login Successful",
            user: {
                fullName: user.fullName,
                email: user.email,
                role: user.role,
            },
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }

}

function logout(req, res) {

    res.clearCookie("token");

    return res.json({
        success: true,
        message: "Logged Out",
    });

}

function me(req, res) {

    return res.json({
        success: true,
        user: req.user,
    });

}

module.exports = {
    login,
    logout,
    me,
};