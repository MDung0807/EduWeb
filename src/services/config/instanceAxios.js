import axios from "axios";

const instance = ()=> {
    const instance = axios.create({
        baseURL: "http://localhost:8090/api/",
        setTimeout: 10000,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        }
    });
    instance.interceptors.request.use();
    instance.interceptors.response.use(Success, Error);
    return instance;
}

const Success = (response) => {
    return response.data;
}
const Error = (error) => {
    return error.response.data;
}

export default instance;