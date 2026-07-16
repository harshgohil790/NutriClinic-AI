require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");


const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const mealPlanRoutes = require("./routes/mealPlanRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: false,
}));
app.use(cookieParser());


app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/meal-plans", mealPlanRoutes);
app.use("/api/appointments", appointmentRoutes);


app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "NutriClinic Backend Running",
    });

});

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});