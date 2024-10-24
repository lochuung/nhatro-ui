// Header.jsx
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import ThemeSwitcher from './theme/ThemeSwitcher.jsx';
import AuthServices from '../services/AuthServices.js';

export default function Header() {
    const navigate = useNavigate();

    const logoutHandler = useCallback(async () => {
        try {
            // Wait for logout to complete
            AuthServices.logout();

            // Preload the Login component
            const loginModule = await import('../pages/Auth/Login.jsx');

            // Display the success toast
            toast.success('Đăng xuất thành công!');

            // Delay navigation to ensure the toast is visible
            setTimeout(() => {
                navigate('/login');
            }, 500); // Adjust the delay as needed (500ms in this case)
        } catch (error) {
            // Handle any errors during logout
            console.error('Error during logout:', error);
            toast.error('Đăng xuất thất bại!');
        }
    }, [navigate]);

    return (
        <>
            {/* HEADER */}
            <header className="container-fluid d-flex py-6 mb-4">
                <ThemeSwitcher/>

                {/* Top buttons */}
                <div className="d-flex align-items-center ms-auto me-n1 me-lg-n2">
                    {/* Profile Dropdown */}
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-profile"
                            className="bg-white rounded-circle shadow-sm mx-1 mx-lg-2"
                        >
                            <div className="avatar avatar-circle avatar-sm avatar-online">
                                <img
                                    src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                                    alt="Profile"
                                    className="avatar-img"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.ItemText>
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-sm avatar-circle">
                                        <img
                                            src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                                            alt="Profile"
                                            className="avatar-img"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h4 className="mb-0">Ellie Tucker</h4>
                                        <p className="card-text">ellie.tucker@dashly.com</p>
                                    </div>
                                </div>
                            </Dropdown.ItemText>

                            <Dropdown.Divider/>

                            <Dropdown.Item href="#">Profile &amp; account</Dropdown.Item>
                            <Dropdown.Item href="#">Settings</Dropdown.Item>

                            <Dropdown.Divider/>

                            <Dropdown.Item as="button" onClick={logoutHandler}>
                                Đăng xuất
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
        </>
    );
}

// Custom Toggle for the Dropdown
const CustomToggle = React.forwardRef(({children, onClick, className}, ref) => (
    <button
        ref={ref}
        className={`dropdown-toggle no-arrow d-flex align-items-center justify-content-center ${className}`}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        style={{
            width: '40px',
            height: '40px',
            border: 'none',
            backgroundColor: 'transparent',
        }}
        aria-label="Toggle profile menu"
    >
        {children}
    </button>
));