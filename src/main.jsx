import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter} from "react-router-dom";
import Rooms from "./pages/rooms.jsx";
import Login from "./pages/Auth/Login.jsx";
import {setAuthorizationToken} from "./services/AuthServices.js";
import {RouterProvider} from "react-router";
import PrivateRoute from "./components/PrivateRoute.jsx";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import store from "./redux/store.js";
import {ThemeScript} from "./components/ThemeScript.jsx";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/Loading/Loading.jsx";


const router = createBrowserRouter([
    {
        element:
            <PrivateRoute>
                <ThemeScript>
                    <App/>
                </ThemeScript>
            </PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Rooms/>,
            },
            {
                path: "/rooms",
                element: <Rooms/>,
            },
            {
                path: "/contracts",
                element: <></>,
            },
            {
                path: "/invoices",
                element: <></>,
            },
            {
                path: "/services",
                element: <></>,
            },

        ]
    },
    {
        path: '/login',
        element:
            <ThemeScript>
                <Login/>
            </ThemeScript>,
    }
]);

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
    setAuthorizationToken(jwtToken);
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Bounce
            />
            <RouterProvider router={router} fallbackElement={<Loading/>}>
            </RouterProvider>
        </Provider>
    </StrictMode>,
)
