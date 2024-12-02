import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './components/providers/AppProvider';
import { router } from './config/router';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    </StrictMode>
)
