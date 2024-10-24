// ThemeToggle.jsx
import React from 'react';

const ThemeToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="dropdown-toggle no-arrow d-flex align-items-center justify-content-center rounded-circle shadow-sm mx-1 mx-lg-2 text-secondary"
        style={{
            width: '40px',
            height: '40px',
            border: 'none',
            backgroundColor: 'transparent',
        }}
        aria-label="Toggle theme"
    >
        {children}
    </button>
));

export default ThemeToggle;
