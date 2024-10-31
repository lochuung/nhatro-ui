import React, {createContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

const lightTheme = {
    body: '#ffffff',
    text: '#000000',
    navbarBackground: 'bg-white',
    navbarTextColor: 'navbar-light',
};

const darkTheme = {
    body: '#000000',
    text: '#ffffff',
    navbarBackground: 'bg-dark',
    navbarTextColor: 'navbar-dark',
};

const ThemeContextProvider = ({ children }) => {
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    };

    const [theme, setTheme] = useState(getPreferredTheme());

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update theme on system preference change
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (localStorage.getItem('theme') === 'auto') {
                setTheme(mediaQuery.matches ? 'dark' : 'light');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
