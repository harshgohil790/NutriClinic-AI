import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../../services/authApi";

import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { setUser } = useAuth();

    const [form, setForm] = useState({

        email: "",

        password: "",

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

            const data = await loginUser(form);

            setUser(data.user);

            toast.success("Login Successful");

            navigate("/");

        }

        catch(err){

            toast.error(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    }

    return(

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form

                onSubmit={handleSubmit}

                className="bg-white p-10 rounded-xl shadow-lg w-[420px]"

            >

                <h1 className="text-3xl font-bold mb-8 text-center">

                    NutriClinic AI

                </h1>

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={form.email}

                    onChange={handleChange}

                    className="w-full border p-3 rounded-lg mb-4"

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={form.password}

                    onChange={handleChange}

                    className="w-full border p-3 rounded-lg mb-6"

                />

                <button

                    className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"

                >

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;