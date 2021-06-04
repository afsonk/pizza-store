import axios from "axios"

export const instance = axios.create({
    baseURL: "https://server-for-pizza.herokuapp.com",
    responseType: "json"
})