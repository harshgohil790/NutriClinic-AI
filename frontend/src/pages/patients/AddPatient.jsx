import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../../components/layout/Layout";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

import { createPatient } from "../../services/patientApi";

function AddPatient() {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "Male",
        height: "",
        weight: "",
        goal: "",
        medicalConditions: "",
        allergies: "",

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await createPatient(form);

            toast.success("Patient Added Successfully");

            navigate("/patients");

        }

        catch (err) {

            toast.error(

                err.response?.data?.message ||

                "Unable to create patient"

            );

        }

    }

    return (

        <Layout>

            <Card>

                <h1 className="text-3xl font-bold mb-8">

                    Add New Patient

                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-6">

                        <Input
                            label="Full Name"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                        />

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <Input
                            label="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                        />

                        <Input
                            label="Age"
                            name="age"
                            type="number"
                            value={form.age}
                            onChange={handleChange}
                        />

                        <Select
                            label="Gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            options={[
                                "Male",
                                "Female",
                                "Other",
                            ]}
                        />

                        <Input
                            label="Height (cm)"
                            name="height"
                            type="number"
                            value={form.height}
                            onChange={handleChange}
                        />

                        <Input
                            label="Weight (kg)"
                            name="weight"
                            type="number"
                            value={form.weight}
                            onChange={handleChange}
                        />

                        <Input
                            label="Goal"
                            name="goal"
                            value={form.goal}
                            onChange={handleChange}
                        />

                    </div>

                    <TextArea

                        label="Medical Conditions"

                        name="medicalConditions"

                        value={form.medicalConditions}

                        onChange={handleChange}

                    />

                    <TextArea

                        label="Allergies"

                        name="allergies"

                        value={form.allergies}

                        onChange={handleChange}

                    />

                    <Button

                        type="submit"

                        className="mt-6"

                    >

                        Create Patient

                    </Button>

                </form>

            </Card>

        </Layout>

    );

}

export default AddPatient;