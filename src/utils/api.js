import axios from "axios";
import {redirect} from "react-router-dom";
import {toast} from "react-toastify";

const api = axios.create({
    timeout: 6000,
    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        if (error.response.status === 401) {
            localStorage.removeItem("accessToken");
            if (window.location.pathname !== "/login") {
                toast.error('Vui lòng đăng nhập để tiếp tục');
                return window.location.href = "/login";
            }
            return Promise.reject(error);
        } else {
            toast.error(error.response.data.description);
        }
        return Promise.reject(error);
    }
);

export default api;