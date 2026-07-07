import { useAuth } from "../context/AuthContext";

function Home() {

    const { user } = useAuth();

    return (

        <div className="flex justify-center items-center h-screen">

            <div className="text-center">

                <h1 className="text-4xl font-bold">

                    NutriClinic AI

                </h1>

                <p className="mt-4 text-xl">

                    {

                        user

                        ?

                        `Welcome ${user.fullName}`

                        :

                        "Please Login"

                    }

                </p>

            </div>

        </div>

    );

}

export default Home;