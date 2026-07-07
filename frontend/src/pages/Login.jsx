import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {

                email,

                password,

            });

            setUser(response.data.user);

            alert("Login Successful");

            navigate("/");

        } catch (err) {

            alert(err.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                <h1 className="text-3xl font-bold text-center mb-2">

                    NutriClinic AI

                </h1>

                <p className="text-center text-gray-500 mb-6">

                    Dietitian Login

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input

                        type="email"

                        placeholder="Email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        className="w-full border rounded-lg p-3"

                        required

                    />

                    <input

                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        className="w-full border rounded-lg p-3"

                        required

                    />

                    <button

                        type="submit"

                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"

                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;