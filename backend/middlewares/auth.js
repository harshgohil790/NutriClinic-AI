const { verifyToken } = require("../services/authService");

function checkAuth(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Login Required",
        });
    }

    try {

        const user = verifyToken(token);

        req.user = user;

        next();

    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token",
        });

    }

}

module.exports = checkAuth;