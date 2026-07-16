const PatientProfile = require("../models/PatientProfile");
const MealPlan = require("../models/MealPlan");
const Appointment = require("../models/Appointment");

async function getDashboard(req, res) {

    try {

        const patientCount = await PatientProfile.countDocuments();

        const mealPlans = await MealPlan.countDocuments();

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const appointmentsToday = await Appointment.countDocuments({

            date: {

                $gte: today,

                $lt: tomorrow,

            }

        });

        return res.json({

            success: true,

            data: {

                patientCount,

                mealPlans,

                appointmentsToday,

            }

        });

    }

    catch(err){

        console.log(err);

        return res.status(500).json({

            success:false,

            message:"Internal Server Error",

        });

    }

}

module.exports = {

    getDashboard,

};