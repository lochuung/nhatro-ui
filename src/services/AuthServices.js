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

    static forgotPassword = (email) => api.post(ApiUrl.forgotPassword, { email });

    static verifyCode = (email, verifyCode) => api.post(ApiUrl.verifyCode, { email, verifyCode });

    static resetPassword = (email, verifyCode, newPassword) => 
        api.post(ApiUrl.resetPassword, { email, verifyCode, newPassword });
}