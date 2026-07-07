const User = require("../models/User");
const PatientProfile = require("../models/PatientProfile");

async function createPatient(req, res) {

    try {

        const {
            fullName,
            email,
            phone,
            age,
            gender,
            height,
            weight,
            goal,
            medicalConditions,
            allergies,
        } = req.body;

        const existing = await User.findOne({ email });

        if (existing) {

            return res.status(400).json({
                success: false,
                message: "Patient already exists",
            });

        }

        // Temporary password
        const password = "Patient@123";

        const user = await User.create({

            fullName,

            email,

            password,

            role: "PATIENT",

        });

        await PatientProfile.create({
            user: user._id,
            phone,
            age,
            gender,
            height,
            weight,
            goal,
            medicalConditions,
            allergies,
        });

        return res.status(201).json({
            success: true,
            message: "Patient Created Successfully",
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

}

async function getPatients(req, res) {

    try {
        const patients = await PatientProfile.find()
            .populate("user", "fullName email");
        return res.json({
            success: true,
            patients,
        });

    } catch (err) {

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

}

module.exports = {
    createPatient,
    getPatients,
};