import axios from "axios";

const APIConfig = axios.create({
    baseURL: "http://localhost:5000/api/v1"
})

export default APIConfig