import { useEffect, useState } from "react";

import { useParams,useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Badge from "../../components/common/Badge";

import Loading from "../../components/common/Loading";

import { getPatient } from "../../services/patientApi";

function PatientDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [patient, setPatient] = useState(null);

    useEffect(() => {

        async function loadPatient() {

            try {

                const data = await getPatient(id);

                setPatient(data.patient);

            }

            catch (err) {

                console.log(err);

            }

        }

        loadPatient();

    }, []);

    if (!patient)
        return <Loading />;

    const bmi = (

        patient.weight /

        Math.pow(patient.height / 100, 2)

    ).toFixed(1);

    return (

        <Layout>
            <div className="flex gap-3 flex-wrap">

    <Button

        onClick={()=>

        navigate(`/meal-plans/create/${patient._id}`)

        }

    >

        Create Meal Plan

    </Button>

    <Button

        variant="secondary"

        onClick={()=>

        navigate(`/meal-plans/${patient._id}`)

        }

    >

        Meal History

    </Button>

    <Button

        onClick={()=>

        navigate(`/appointments/add/${patient._id}`)

        }

    >

        Book Appointment

    </Button>

    <Button

        variant="secondary"

        onClick={()=>

        navigate(`/appointments/${patient._id}`)

        }

    >

        Appointment History

    </Button>

</div>
            <Card>

                <div className="flex justify-between">

                    <div>

                        <h1 className="text-4xl font-bold">

                            {patient.user.fullName}

                        </h1>

                        <p className="text-gray-500">

                            {patient.user.email}

                        </p>

                    </div>

                    <Badge>

                        Active

                    </Badge>

                </div>

            </Card>

            <div className="grid grid-cols-2 gap-6 mt-6">

                <Card>

                    <h2 className="font-bold text-xl mb-4">

                        Personal Information

                    </h2>

                    <p>

                        Age : {patient.age}

                    </p>

                    <p>

                        Gender : {patient.gender}

                    </p>

                    <p>

                        Phone : {patient.phone}

                    </p>

                </Card>

                <Card>

                    <h2 className="font-bold text-xl mb-4">

                        Health Information

                    </h2>

                    <p>

                        Height : {patient.height} cm

                    </p>

                    <p>

                        Weight : {patient.weight} kg

                    </p>

                    <p>

                        BMI : {bmi}

                    </p>

                    <p>

                        Goal : {patient.goal}

                    </p>

                </Card>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">

                <Card>

                    <h2 className="font-bold text-xl mb-4">

                        Medical Conditions

                    </h2>

                    <p>

                        {patient.medicalConditions || "None"}

                    </p>

                </Card>

                <Card>

                    <h2 className="font-bold text-xl mb-4">

                        Allergies

                    </h2>

                    <p>

                        {patient.allergies || "None"}

                    </p>

                </Card>

            </div>

        </Layout>

    );

}

export default PatientDetails;