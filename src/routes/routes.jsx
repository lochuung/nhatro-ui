import {lazy} from 'react';
import PrivateRoute from '../components/PrivateRoute.jsx';
import App from '../App.jsx';
import Login from '../pages/Auth/Login.jsx';
import ForgotPassword from '../pages/Auth/ForgotPassword.jsx';

// Lazy-loaded components
const Rooms = lazy(() => import('../pages/rooms.jsx'));
const Contract = lazy(() => import('../pages/contract.jsx'));
const Service = lazy(() => import('../pages/services.jsx'));
const Setting = lazy(() => import('../pages/settings.jsx'));
const Invoice = lazy(() => import('../pages/invoice.jsx'));
const Customer = lazy(() => import('../pages/customer.jsx'));

const routes = [
    {
        element: (
            <PrivateRoute>
                <App/>
            </PrivateRoute>
        ),
        children: [
            {path: '/', element: <Rooms/>},
            {path: '/rooms', element: <Rooms/>},
            {path: '/contracts', element: <Contract/>},
            {path: '/invoices', element: <Invoice/>},
            {path: '/services', element: <Service/>},
            {path: '/settings', element: <Setting></Setting>},
            {path: 'customers', element: <Customer/>},
        ],
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword/>,
    },
];

export default routes;
