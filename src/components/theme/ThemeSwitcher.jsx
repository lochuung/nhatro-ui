import React, {useContext} from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';
import {ThemeContext} from '../../context/ThemeContext.jsx';

const themes = [
    {value: 'light', label: 'Light mode', icon: FaSun},
    {value: 'dark', label: 'Dark mode', icon: FaMoon}
];

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    const CurrentIcon = themes[currentIndex].icon;

    const handleClick = () => {
        toggleTheme(nextTheme.value);
    };

    return (
        <button
            onClick={handleClick}
            aria-label={`Switch theme to ${nextTheme.label}`}
            style={{
                background: 'none',
                border: '1px solid ' + (theme === 'dark' ? 'white' : 'black'),
                opacity: 0.5,
                borderRadius: '100%',
                padding: '8px',
                cursor: 'pointer',
            }}
        >
            <CurrentIcon size={18} color={theme === 'dark' ? 'white' : 'black'}/>
        </button>

    );
};

export default ThemeSwitcher;
