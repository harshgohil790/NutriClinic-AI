const Appointment = require("../models/Appointment");

async function createAppointment(req, res) {

    try {

        console.log("Body:", req.body);
        console.log("req.user =", req.user);
console.log("req.user._id =", req.user?._id);

        const appointment = await Appointment.create({

            ...req.body,

            createdBy: req.user.id,

        });

        return res.status(201).json({

            success: true,

            appointment,

        });

    }

    catch(err){

        console.log(err);

        return res.status(500).json({

            success:false,

            message:err.message,

        });

    }

}

async function getAppointments(req, res) {

    try {

        const appointments = await Appointment.find({

            patient: req.params.patientId,

        });

        return res.json({

            success: true,

            appointments,

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

async function completeAppointment(req, res) {

    try {

        const appointment = await Appointment.findByIdAndUpdate(

            req.params.id,

            {

                status: "Completed",

            },

            {

                new: true,

            }

        );

        return res.json({

            success: true,

            appointment,

        });

    }

    catch (err) {

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

}

module.exports = {

    createAppointment,

    getAppointments,

    completeAppointment,

};