import api from "./api";

export async function createMealPlan(data){

    const response = await api.post(

        "/meal-plans",

        data

    );

    return response.data;

}

export async function getMealPlans(patientId){

    const response = await api.get(

        `/meal-plans/${patientId}`

    );

    return response.data;

}