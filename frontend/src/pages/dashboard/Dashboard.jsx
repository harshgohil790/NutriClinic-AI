import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import StatCard from "../../components/common/StatCard";

import { useAuth } from "../../context/AuthContext";

import { getDashboard } from "../../services/dashboardApi";
import { getCurrentUser } from "../../services/authApi";

import {
    FaUsers,
    FaClipboardList,
    FaCalendarAlt,
} from "react-icons/fa";

function Dashboard() {

    const navigate = useNavigate();

    const {
        user,
        setUser,
        loading,
        setLoading,
    } = useAuth();

    const [dashboard, setDashboard] = useState({

        patientCount: 0,
        mealPlans: 0,
        appointmentsToday: 0,

    });

    useEffect(() => {

        async function loadDashboard() {

            try {

                const currentUser = await getCurrentUser();

                setUser(currentUser.user);

                const dashboardData = await getDashboard();

                setDashboard(dashboardData.data);

            }

            catch (err) {

                console.log(err);

            }

            finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, []);

    if (loading) {

        return (

            <div className="h-screen flex justify-center items-center">

                <h1 className="text-3xl font-bold">

                    Loading...

                </h1>

            </div>

        );

    }

    return (

        <Layout>

            {/* Header */}

            <div className="flex justify-between items-center mb-10">

                <div>

                    <h1 className="text-4xl font-bold">

                        Welcome {user?.fullName}

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage your clinic efficiently 🚀

                    </p>

                </div>

                <button

                    onClick={() => navigate("/patients/add")}

                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"

                >

                    + Add Patient

                </button>

            </div>

            {/* Dashboard Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <StatCard

                    title="Patients"

                    value={dashboard.patientCount}

                    icon={<FaUsers />}

                />

                <StatCard

                    title="Meal Plans"

                    value={dashboard.mealPlans}

                    icon={<FaClipboardList />}

                />

                <StatCard

                    title="Appointments"

                    value={dashboard.appointmentsToday}

                    icon={<FaCalendarAlt />}

                />

            </div>

        </Layout>

    );

}

export default Dashboard;