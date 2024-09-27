import { Navigate } from "react-router";
import { toast } from "react-toastify";


const PrivateRoute = ({children}) => {
    let token = localStorage.getItem("accessToken");
    if (token !== null && token !== undefined) {
        return children;
    } else {
        return (
            <Navigate to="/login" />
        );
    }
}

export default PrivateRoute;