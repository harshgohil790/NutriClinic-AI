import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

// Authentication
import Login from "./pages/auth/Login";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Patients
import AddPatient from "./pages/patients/AddPatient";
import Patients from "./pages/patients/Patients";
import PatientDetails from "./pages/patients/PatientDetails";

// Meal Plans
import CreateMealPlan from "./pages/mealPlans/CreateMealPlan";
import MealPlans from "./pages/mealPlans/MealPlans";

// Appointments
import AddAppointment from "./pages/appointments/AddAppointment";
import Appointments from "./pages/appointments/Appointments";

function App() {

    return (

        <Routes>

            {/* Authentication */}

            <Route
                path="/login"
                element={<Login />}
            />

            {/* Dashboard */}

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            {/* Patients */}

            <Route
                path="/patients"
                element={
                    <ProtectedRoute>
                        <Patients />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/patients/add"
                element={
                    <ProtectedRoute>
                        <AddPatient />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/patients/:id"
                element={
                    <ProtectedRoute>
                        <PatientDetails />
                    </ProtectedRoute>
                }
            />

            {/* Meal Plans */}

            <Route
                path="/meal-plans/create/:patientId"
                element={
                    <ProtectedRoute>
                        <CreateMealPlan />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/meal-plans/:patientId"
                element={
                    <ProtectedRoute>
                        <MealPlans />
                    </ProtectedRoute>
                }
            />

            {/* Appointments */}

            <Route
                path="/appointments/add/:patientId"
                element={
                    <ProtectedRoute>
                        <AddAppointment />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/appointments/:patientId"
                element={
                    <ProtectedRoute>
                        <Appointments />
                    </ProtectedRoute>
                }
            />

        </Routes>

    );

}

export default App;