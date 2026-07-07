const jwt = require("jsonwebtoken");

const SECRET = "NutriClinic@123";

function createToken(user) {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
        },
        SECRET,
        {
            expiresIn: "7d",
        }
    );
}

function verifyToken(token) {
    return jwt.verify(token, SECRET);
}

module.exports = {
    createToken,
    verifyToken,
};