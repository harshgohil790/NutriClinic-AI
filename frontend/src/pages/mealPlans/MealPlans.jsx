import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Loading from "../../components/common/Loading";

import MealPlanCard from "../../components/mealPlans/MealPlanCard";

import { getMealPlans } from "../../services/mealPlanApi";

function MealPlans() {

    const { patientId } = useParams();

    const navigate = useNavigate();

    const [mealPlans, setMealPlans] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMealPlans() {

            try {

                const data = await getMealPlans(patientId);

                setMealPlans(data.mealPlans);

            }

            catch (err) {

                console.log(err);

            }

            finally {

                setLoading(false);

            }

        }

        loadMealPlans();

    }, [patientId]);

    if (loading)
        return <Loading />;

    return (

        <Layout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">

                    Meal Plan History

                </h1>

                <Button

                    onClick={() =>
                        navigate(`/meal-plans/create/${patientId}`)
                    }

                >

                    + Create Meal Plan

                </Button>

            </div>

            {

                mealPlans.length === 0 ?

                (

                    <Card>

                        <div className="text-center py-16">

                            <h2 className="text-2xl font-bold">

                                No Meal Plans Found

                            </h2>

                            <p className="text-gray-500 mt-3">

                                Create the first meal plan for this patient.

                            </p>

                            <Button

                                className="mt-6"

                                onClick={() =>
                                    navigate(`/meal-plans/create/${patientId}`)
                                }

                            >

                                Create Meal Plan

                            </Button>

                        </div>

                    </Card>

                )

                :

                (

                    mealPlans.map((mealPlan) => (

                        <MealPlanCard

                            key={mealPlan._id}

                            mealPlan={mealPlan}

                        />

                    ))

                )

            }

        </Layout>

    );

}

export default MealPlans;