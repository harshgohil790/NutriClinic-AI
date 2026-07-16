import api from "./api";

export async function createAppointment(data) {

    const response = await api.post(

        "/appointments",

        data

    );

    return response.data;

}

export async function getAppointments(patientId) {

    const response = await api.get(

        `/appointments/${patientId}`

    );

    return response.data;

}

export async function completeAppointment(id) {

    const response = await api.patch(

        `/appointments/${id}`

    );

    return response.data;

}