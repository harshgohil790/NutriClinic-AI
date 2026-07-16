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

        const { search = "" } = req.query;

        const patients = await PatientProfile.find()

            .populate({

                path: "user",

                match: {

                    fullName: {

                        $regex: search,

                        $options: "i",

                    },

                },

                select: "fullName email isActive",

            });

        const filteredPatients = patients.filter(

            patient => patient.user

        );

        return res.json({

            success: true,

            patients: filteredPatients,

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

async function getPatient(req, res) {

    try {

        const patient = await PatientProfile.findById(req.params.id)

            .populate("user", "fullName email");

        if (!patient) {

            return res.status(404).json({

                success: false,

                message: "Patient not found",

            });

        }

        return res.json({

            success: true,

            patient,

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
module.exports = {
    createPatient,
    getPatients,
    getPatient,
};