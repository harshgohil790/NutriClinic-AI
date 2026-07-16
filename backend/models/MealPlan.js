const { Schema, model } = require("mongoose");

const mealPlanSchema = new Schema(
    {
        patient: {
            type: Schema.Types.ObjectId,
            ref: "PatientProfile",
            required: true,
        },

        breakfast: {
            type: String,
            required: true,
        },

        morningSnack: {
            type: String,
            default: "",
        },

        lunch: {
            type: String,
            required: true,
        },

        eveningSnack: {
            type: String,
            default: "",
        },

        dinner: {
            type: String,
            required: true,
        },

        calories: {
            type: Number,
            required: true,
        },

        notes: {
            type: String,
            default: "",
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    },
    {
        timestamps: true,
    }
);

module.exports = model("MealPlan", mealPlanSchema);