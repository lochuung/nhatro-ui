import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ApiUrl from "../utils/api-url.js";
import {logout as reduxLogout} from "../redux/userSlice.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";
import api from "../utils/api.js";

export default class AuthServices {
    static login = (email, password) => api.post(ApiUrl.login, {
        email, password
    });

    static logout = () => {
        localStorage.removeItem("accessToken");
        reduxLogout();
    }

    static expiredToken = () => {
        toast.error('Phiên đăng nhập hết hạn!');
        AuthServices.logout();
    }
}