import api from "./api";

export async function getCurrentUser() {

    const response = await api.get("/auth/me");

    return response.data;

}

export async function loginUser(data){

    const response = await api.post("/auth/login",data);

    return response.data;

}

export async function logoutUser(){

    const response = await api.post("/auth/logout");

    return response.data;

}