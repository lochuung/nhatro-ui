
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "../../context/ThemeContext.jsx";
import ErrorBoundary from "../../routes/ErrorBoundary.jsx";
import { Suspense } from "react";
import Loading from "../Loading/Loading.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

export function AppProvider({ children }) {
    return (
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
            <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                    <ThemeContextProvider>
                        {children}
                    </ThemeContextProvider>
                </ErrorBoundary>
            </Suspense>
        </QueryClientProvider>
    );
}