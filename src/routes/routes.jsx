import {lazy} from 'react';
import PrivateRoute from '../components/PrivateRoute.jsx';
import App from '../App.jsx';
import Login from '../pages/Auth/Login.jsx';

// Lazy-loaded components
const Rooms = lazy(() => import('../pages/rooms.jsx'));
const Contract = lazy(() => import('../pages/contract.jsx'));
const Service = lazy(() => import('../pages/services.jsx'));
const Setting = lazy(() => import('../pages/settings.jsx'));
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
            {path: '/invoices', element: <></>},
            {path: '/services', element: <Service/>},
            {path: '/settings', element: <Setting></Setting>},
        ],
    },
    {
        path: '/login',
        element: <Login/>,
    },
];

export default routes;
