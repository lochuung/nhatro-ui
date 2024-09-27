import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ApiUrl from "../utils/api-url.js";
import {logout as reduxLogout} from "../redux/userSlice.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

const setAuthorizationToken = (token) => {
    if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else
        delete axios.defaults.headers.common["Authorization"];
}

export default class AuthServices {
    static login = (email, password) => axios.post(ApiUrl.login, {
        email, password
    });

    static logout = () => {
        localStorage.removeItem("accessToken");
        setAuthorizationToken(false);
        reduxLogout();
    }

    static expiredToken = () => {
        toast.error('Phiên đăng nhập hết hạn!');
        AuthServices.logout();
    }
}

export {setAuthorizationToken};