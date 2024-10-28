import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { Button, Tooltip } from 'antd';

const themes = [
    { value: 'light', label: 'Light mode', icon: FaSun },
    { value: 'dark', label: 'Dark mode', icon: FaMoon }
];

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    const CurrentIcon = themes[currentIndex].icon;

    const handleClick = () => {
        toggleTheme(nextTheme.value);
    };

    return (
        <Tooltip title={`Switch to ${nextTheme.label}`}>
            <Button
                onClick={handleClick}
                shape="circle"
                icon={<CurrentIcon size={18} />}
                style={{
                    backgroundColor: theme === 'dark' ? '#333' : '#fff',
                    borderColor: theme === 'dark' ? '#666' : '#ddd',
                    color: theme === 'dark' ? '#f5f5f5' : '#333',
                    boxShadow: theme === 'dark' ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
            />
        </Tooltip>
    );
};

export default ThemeSwitcher;
