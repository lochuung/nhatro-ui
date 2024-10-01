import {toast} from "react-toastify";
import {useEffect} from "react";
import {redirect, useLocation} from "react-router-dom";
import {Navigate} from "react-router";


const PrivateRoute = ({children}) => {
    let token = localStorage.getItem("accessToken");
    if (token !== null && token !== undefined) {
        return children;
    } else {
        return <Navigate to="/login"/>;
    }
}

export default PrivateRoute;