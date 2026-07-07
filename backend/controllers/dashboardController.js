const User = require("../models/User");

async function getDashboard(req, res) {
    try {

        const patientCount = await User.countDocuments({
            role: "PATIENT",
        });

        return res.json({
            success: true,
            data: {
                patientCount,
                mealPlans: 0,
                appointmentsToday: 0,
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

module.exports = {
    getDashboard,
};