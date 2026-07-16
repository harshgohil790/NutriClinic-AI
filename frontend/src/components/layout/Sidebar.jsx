import {
    FaChartPie,
    FaUsers,
    FaClipboardList,
    FaCalendarAlt,
    FaRobot,
    FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menu = [

    {
        title: "Dashboard",
        path: "/",
        icon: <FaChartPie />,
    },

    {
        title: "Patients",
        path: "/patients",
        icon: <FaUsers />,
    },

    {
        title: "Meal Plans",
        path: "/meal-plans",
        icon: <FaClipboardList />,
    },

    {
        title: "Appointments",
        path: "/appointments",
        icon: <FaCalendarAlt />,
    },

    {
        title: "AI Assistant",
        path: "/ai",
        icon: <FaRobot />,
    },

    {
        title: "Settings",
        path: "/settings",
        icon: <FaCog />,
    },

];

function Sidebar() {

    return (

        <div className="w-72 min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white shadow-xl">

            <div className="text-center py-8">

                <h1 className="text-3xl font-bold">

                    🥗 NutriClinic AI

                </h1>

                <p className="text-sm mt-2 text-green-100">

                    Dietitian Portal

                </p>

            </div>

            <div className="mt-8 px-4">

                {

                    menu.map((item)=>(

                        <NavLink

                            key={item.path}

                            to={item.path}

                            className={({isActive})=>

                                `flex items-center gap-4 p-4 rounded-xl mb-3 transition-all

                                ${isActive

                                    ?

                                    "bg-white text-green-700 shadow"

                                    :

                                    "hover:bg-green-600"

                                }`

                            }

                        >

                            <span className="text-xl">

                                {item.icon}

                            </span>

                            {item.title}

                        </NavLink>

                    ))

                }

            </div>

        </div>

    );

}

export default Sidebar;