const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
    {

        patient: {

            type: Schema.Types.ObjectId,

            ref: "PatientProfile",

            required: true,

        },

        date: {

            type: Date,

            required: true,

        },

        time: {

            type: String,

            required: true,

        },

        purpose: {

            type: String,

            required: true,

            trim: true,

        },

        status: {

            type: String,

            enum: ["Scheduled", "Completed"],

            default: "Scheduled",

        },

        createdBy: {

            type: Schema.Types.ObjectId,

            ref: "User",

            required: true,

        },

    },

    {

        timestamps: true,

    }

);

module.exports = model("Appointment", appointmentSchema);