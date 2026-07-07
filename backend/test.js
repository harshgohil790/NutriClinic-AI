require("dotenv").config();

const connectDB = require("./config/db");
const User = require("./models/User");

connectDB(process.env.MONGO_URL)
.then(async()=>{

    const user = await User.create({

        fullName:"Clinic Owner",

        email:"doctor@clinic.com",

        password:"123456",

        role:"DIETITIAN"

    });

    console.log(user);

    process.exit();

});