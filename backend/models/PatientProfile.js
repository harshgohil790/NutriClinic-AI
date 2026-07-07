const { Schema, model } = require("mongoose");

const patientProfileSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        age: {
            type: Number,
            required: true,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        height: {
            type: Number,
            required: true,
        },

        weight: {
            type: Number,
            required: true,
        },

        goal: {
            type: String,
            default: "",
        },

        medicalConditions: {
            type: String,
            default: "",
        },

        allergies: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("PatientProfile", patientProfileSchema);