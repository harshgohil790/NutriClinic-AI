function StatCard({

    title,

    value,

    icon,

}) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-500">

                        {title}

                    </p>

                    <h1 className="text-4xl font-bold mt-2">

                        {value}

                    </h1>

                </div>

                <div className="text-5xl text-green-600">

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default StatCard;