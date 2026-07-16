import Card from "../common/Card";
import Button from "../common/Button";

function AppointmentCard({

    appointment,

    onComplete,

}) {

    return (

        <Card className="mb-5">

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-xl font-bold">

                        {appointment.purpose}

                    </h2>

                    <p className="text-gray-500 mt-2">

                        📅 {new Date(appointment.date).toLocaleDateString()}

                    </p>

                    <p>

                        🕒 {appointment.time}

                    </p>

                </div>

                <div>

                    {

                        appointment.status === "Completed"

                        ?

                        <span className="text-green-600 font-semibold">

                            Completed

                        </span>

                        :

                        <Button

                            onClick={()=>

                                onComplete(appointment._id)

                            }

                        >

                            Complete

                        </Button>

                    }

                </div>

            </div>

        </Card>

    );

}

export default AppointmentCard;