import { useEffect,useState } from "react";

import { useNavigate,useParams } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import Button from "../../components/common/Button";

import Loading from "../../components/common/Loading";

import AppointmentCard from "../../components/appointments/AppointmentCard";

import {

    getAppointments,

    completeAppointment,

} from "../../services/appointmentApi";

function Appointments(){

    const { patientId } = useParams();

    const navigate = useNavigate();

    const [appointments,setAppointments]=useState([]);

    const [loading,setLoading]=useState(true);

    async function loadAppointments(){

        try{

            const data=await getAppointments(patientId);

            setAppointments(data.appointments);

        }

        catch(err){

            console.log(err);

        }

        finally{

            setLoading(false);

        }

    }

    useEffect(()=>{

        loadAppointments();

    },[]);

    async function handleComplete(id){

        await completeAppointment(id);

        loadAppointments();

    }

    if(loading)

        return <Loading/>;

    return(

        <Layout>

            <div className="flex justify-between mb-8">

                <h1 className="text-3xl font-bold">

                    Appointments

                </h1>

                <Button

                    onClick={()=>

                        navigate(

                        `/appointments/add/${patientId}`

                        )

                    }

                >

                    Book Appointment

                </Button>

            </div>

            {

                appointments.map((appointment)=>(

                    <AppointmentCard

                        key={appointment._id}

                        appointment={appointment}

                        onComplete={handleComplete}

                    />

                ))

            }

        </Layout>

    );

}

export default Appointments;