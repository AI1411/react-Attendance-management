import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://sakura.test/api/',
    timeout: 1000
})
