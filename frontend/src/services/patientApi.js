import api from "./api";

export async function createPatient(patient) {

    const response = await api.post("/patients", patient);

    return response.data;

}

export async function getPatients(search = "") {

    const response = await api.get(

        `/patients?search=${search}`

    );

    return response.data;

}

export async function getPatient(id) {

    const response = await api.get(`/patients/${id}`);

    return response.data;

}