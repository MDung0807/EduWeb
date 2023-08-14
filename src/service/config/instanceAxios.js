import axios from "axios";

const instance = ()=> {
    const instance = axios.create({
        baseUrl: "http://localhost:8090/api/",
        setTimeout: 10000,
        headers: {
            'Bearer': localStorage.getItem('token'),
        }
    });
    instance.interceptors.request.use();
    instance.interceptors.response.use(Success(), Error());
    return instance;
}

const Success = (response) => {
    console.log("Response from instance: ", response);
    return response;
}
const Error = (error) => {
    console.log("Error from instance: ", error);
    return error;
}

export default instance;