import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import Layout from "../../components/layout/Layout";

import Card from "../../components/common/Card";

import Input from "../../components/common/Input";

import Button from "../../components/common/Button";

import { createAppointment } from "../../services/appointmentApi";

function AddAppointment(){

    const { patientId } = useParams();

    const navigate = useNavigate();

    const [form,setForm]=useState({

        patient:patientId,

        date:"",

        time:"",

        purpose:"",

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value,

        });

    }

    async function handleSubmit(e){

        e.preventDefault();

        try{

            await createAppointment(form);

            toast.success(

                "Appointment Created"

            );

            navigate(

                `/appointments/${patientId}`

            );

        }

        catch(err){

            toast.error(

                err.response?.data?.message ||

                "Unable to Create Appointment"

            );

        }

    }

    return(

        <Layout>

            <Card>

                <h1 className="text-3xl font-bold mb-8">

                    Book Appointment

                </h1>

                <form onSubmit={handleSubmit}>

                    <Input

                        label="Date"

                        type="date"

                        name="date"

                        value={form.date}

                        onChange={handleChange}

                    />

                    <Input

                        label="Time"

                        type="time"

                        name="time"

                        value={form.time}

                        onChange={handleChange}

                    />

                    <Input

                        label="Purpose"

                        name="purpose"

                        value={form.purpose}

                        onChange={handleChange}

                    />

                    <Button

                        type="submit"

                    >

                        Save Appointment

                    </Button>

                </form>

            </Card>

        </Layout>

    );

}

export default AddAppointment;