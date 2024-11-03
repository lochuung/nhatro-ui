import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import {Bounce, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/Loading/Loading.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import routes from './routes/routes.jsx';
import ErrorBoundary from "./routes/ErrorBoundary.jsx";
import {ThemeContextProvider} from "./context/ThemeContext.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
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
                transition={Bounce}
            />
            <Suspense fallback={<Loading/>}>
                <ErrorBoundary>
                    <ThemeContextProvider>
                        <RouterProvider router={createBrowserRouter(routes)}/>
                    </ThemeContextProvider>
                </ErrorBoundary>
            </Suspense>
        </QueryClientProvider>
    </StrictMode>,
)
