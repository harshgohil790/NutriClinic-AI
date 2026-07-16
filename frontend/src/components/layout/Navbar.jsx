import {
    FaBell,
    FaUserCircle,
    FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/authApi";

function Navbar() {

    const navigate = useNavigate();

    const {
        user,
        setUser,
    } = useAuth();

    async function handleLogout() {

        try {

            await logoutUser();

            setUser(null);

            toast.success("Logged Out Successfully");

            navigate("/login");

        } catch (err) {

            console.log(err);

            toast.error("Logout Failed");

        }

    }

    return (

        <div className="bg-white h-20 shadow-md flex justify-between items-center px-8">

            <div>

                <h2 className="text-2xl font-bold">

                    Dashboard

                </h2>

                <p className="text-sm text-gray-500">

                    Welcome back 👋

                </p>

            </div>

            <div className="flex items-center gap-6">

                <button className="relative">

                    <FaBell
                        size={22}
                        className="text-gray-600"
                    />

                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">

                        0

                    </span>

                </button>

                <div className="flex items-center gap-3">

                    <FaUserCircle
                        size={42}
                        className="text-green-700"
                    />

                    <div>

                        <h3 className="font-semibold">

                            {user?.fullName || "Dietitian"}

                        </h3>

                        <p className="text-sm text-gray-500">

                            {user?.role || "DIETITIAN"}

                        </p>

                    </div>

                </div>

                <button

                    onClick={handleLogout}

                    className="text-red-500 hover:text-red-700 transition"

                    title="Logout"

                >

                    <FaSignOutAlt size={22} />

                </button>

            </div>

        </div>

    );

}

export default Navbar;