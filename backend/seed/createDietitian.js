require("dotenv").config();

const connectDB = require("../config/db");
const User = require("../models/User");

async function seedDietitian() {
    try {
        await connectDB(process.env.MONGO_URL);

        const existing = await User.findOne({
            role: "DIETITIAN",
        });

        if (existing) {
            console.log("Dietitian already exists.");
            process.exit();
        }

        await User.create({
            fullName: "Clinic Owner",
            email: "doctor@clinic.com",
            password: "Doctor@123",
            role: "DIETITIAN",
        });

        console.log("Default Dietitian Created Successfully.");

        process.exit();

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

seedDietitian();