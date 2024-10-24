import {useEffect, useState} from 'react';

const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);

    // This will be triggered when an error occurs
    const handleError = (error, errorInfo) => {
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
        setHasError(true);
    };

    // Add an effect to catch errors globally
    useEffect(() => {
        const errorListener = (errorEvent) => {
            handleError(errorEvent.error);
        };

        window.addEventListener('error', errorListener);

        return () => {
            window.removeEventListener('error', errorListener);
        };
    }, []);

    // Reset error boundary state
    const resetError = () => {
        setHasError(false);
    };

    if (hasError) {
        return (
            <div>
                <h1>Something went wrong. Please try again later.</h1>
                <button onClick={resetError}>Retry</button>
            </div>
        );
    }

    return children;
};

export default ErrorBoundary;
