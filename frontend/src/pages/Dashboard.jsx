import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";

import { getDashboard } from "../services/dashboardApi";

import StatCard from "../components/StatCard";

function Dashboard() {

    const { user } = useAuth();

    const [dashboard, setDashboard] = useState({

        patientCount: 0,

        mealPlans: 0,

        appointmentsToday: 0,

    });

    useEffect(() => {

        async function loadDashboard() {

            try {

                const data = await getDashboard();

                setDashboard(data.data);

            } catch (err) {

                console.log(err);

            }

        }

        loadDashboard();

    }, []);

    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold">

                Welcome {user?.fullName}

            </h1>

            <p className="text-gray-600 mt-2">

                NutriClinic AI Dashboard

            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <StatCard

                    title="Patients"

                    value={dashboard.patientCount}

                />

                <StatCard

                    title="Meal Plans"

                    value={dashboard.mealPlans}

                />

                <StatCard

                    title="Appointments"

                    value={dashboard.appointmentsToday}

                />

            </div>

        </div>

    );

}

export default Dashboard;