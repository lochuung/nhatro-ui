import ApiUrl from "../utils/api-url.js";
import {toast} from "react-toastify";
import api from "../utils/api.js";

export default class AuthServices {
    static login = (email, password) => api.post(ApiUrl.login, {
        email, password
    });

    static logout = () => {
        localStorage.removeItem("accessToken");
    }

    static expiredToken = () => {
        toast.error('Phiên đăng nhập hết hạn!');
        AuthServices.logout();
    }
}