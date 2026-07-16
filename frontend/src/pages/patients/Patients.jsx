import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";

import Card from "../../components/common/Card";

import Input from "../../components/common/Input";

import Button from "../../components/common/Button";

import Badge from "../../components/common/Badge";

import Table from "../../components/common/Table";

import { getPatients } from "../../services/patientApi";

function Patients(){

    const navigate = useNavigate();

    const [patients,setPatients]=useState([]);

    const [search,setSearch]=useState("");

    async function loadPatients(){

        try{

            const data=await getPatients(search);

            setPatients(data.patients);

        }

        catch(err){

            console.log(err);

        }

    }

    useEffect(()=>{

        loadPatients();

    },[search]);

    return(

        <Layout>

            <Card>

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-3xl font-bold">

                        Patients

                    </h1>

                    <Button

                        onClick={()=>navigate("/patients/add")}

                    >

                        + Add Patient

                    </Button>

                </div>

                <div className="mb-6">

                    <Input

                        label=""

                        placeholder="Search Patient..."

                        value={search}

                        name="search"

                        onChange={(e)=>setSearch(e.target.value)}

                    />

                </div>

                <Table

                    columns={[

                        "Name",

                        "Age",

                        "Weight",

                        "Goal",

                        "Status",

                        "Action",

                    ]}

                >

                    {

                        patients.map((patient)=>(

                            <tr

                                key={patient._id}

                                className="border-b"

                            >

                                <td className="p-4">

                                    {patient.user.fullName}

                                </td>

                                <td className="p-4">

                                    {patient.age}

                                </td>

                                <td className="p-4">

                                    {patient.weight} kg

                                </td>

                                <td className="p-4">

                                    {patient.goal}

                                </td>

                                <td className="p-4">

                                    <Badge>

                                        Active

                                    </Badge>

                                </td>

                                <td className="p-4">

                                    <Button

                                        variant="secondary"

                                        onClick={()=>

                                        navigate(

                                        `/patients/${patient._id}`

                                        )}

                                    >

                                        View

                                    </Button>

                                </td>

                            </tr>

                        ))

                    }

                </Table>

            </Card>

        </Layout>

    );

}

export default Patients;