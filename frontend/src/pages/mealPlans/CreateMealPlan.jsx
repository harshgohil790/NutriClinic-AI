import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../../components/layout/Layout";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

import { createMealPlan } from "../../services/mealPlanApi";

function CreateMealPlan() {

    const { patientId } = useParams();

    const navigate = useNavigate();

    const [form, setForm] = useState({

        patient: patientId,

        breakfast: "",

        morningSnack: "",

        lunch: "",

        eveningSnack: "",

        dinner: "",

        calories: "",

        notes: "",

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

            await createMealPlan(form);

            toast.success("Meal Plan Created");

            navigate(`/meal-plans/${patientId}`);

        }

        catch(err){

            console.log(err);

            toast.error(

                err.response?.data?.message ||

                "Unable to Create Meal Plan"

            );

        }

    }

    return(

        <Layout>

            <Card>

                <h1 className="text-3xl font-bold mb-8">

                    Create Meal Plan

                </h1>

                <form

                    onSubmit={handleSubmit}

                >

                    <Input

                        label="Breakfast"

                        name="breakfast"

                        value={form.breakfast}

                        onChange={handleChange}

                    />

                    <Input

                        label="Morning Snack"

                        name="morningSnack"

                        value={form.morningSnack}

                        onChange={handleChange}

                    />

                    <Input

                        label="Lunch"

                        name="lunch"

                        value={form.lunch}

                        onChange={handleChange}

                    />

                    <Input

                        label="Evening Snack"

                        name="eveningSnack"

                        value={form.eveningSnack}

                        onChange={handleChange}

                    />

                    <Input

                        label="Dinner"

                        name="dinner"

                        value={form.dinner}

                        onChange={handleChange}

                    />

                    <Input

                        label="Daily Calories"

                        type="number"

                        name="calories"

                        value={form.calories}

                        onChange={handleChange}

                    />

                    <TextArea

                        label="Dietitian Notes"

                        name="notes"

                        value={form.notes}

                        onChange={handleChange}

                    />

                    <div className="mt-8">

                        <Button

                            type="submit"

                        >

                            Save Meal Plan

                        </Button>

                    </div>

                </form>

            </Card>

        </Layout>

    );

}

export default CreateMealPlan;