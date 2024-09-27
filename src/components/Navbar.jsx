import { NavLink, useLocation } from "react-router-dom";


export default function Navbar() {
    const { pathname } = useLocation();
    return (
        <>
            <nav
                id="mainNavbar"
                className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark"
            >
                {/* Theme configuration (navbar) */}
                <div className="container-fluid">
                    {/* Brand */}
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/33193ecc0db7caa7d7efee3dca8af1b145fa2135/16978/assets/images/logo-small.svg"
                            className="navbar-brand-img logo-dark logo-small"
                            alt="..."
                            width={19}
                            height={25}
                        />
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/ba6b91b7d508187d153e48318c22d0773a9cedfc/36afa/assets/images/logo.svg"
                            className="navbar-brand-img logo-dark logo-large"
                            alt="..."
                            width={125}
                            height={25}
                        />
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/8b6c92837e3b7aa8c9017d33298ead6b9b859d79/fa79b/assets/images/logo-dark-small.svg"
                            className="navbar-brand-img logo-light logo-small"
                            alt="..."
                            width={19}
                            height={25}
                        />
                        <img
                            src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
                            className="navbar-brand-img logo-light logo-large"
                            alt="..."
                            width={125}
                            height={25}
                        />
                    </a>
                    {/* Navbar toggler */}
                    <a
                        href="javascript: void(0);"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidenavCollapse"
                        aria-controls="sidenavCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </a>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidenavCollapse">
                        {/* Navigation */}
                        <ul className="navbar-nav mb-lg-7">
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link"
                                    to="/rooms"
                                    role="button"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="nav-link-icon"
                                        height={18}
                                        width={18}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <span>Phòng</span>
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link"
                                    to="/contracts"
                                    role="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="nav-link-icon"
                                        height={18}
                                        width={18}
                                    >
                                        <path
                                            d="M22.627 14.87 15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 0 1 2.991 0l.009.008a2.116 2.116 0 0 1-.004 2.992zM8.246 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5V9m-10.5-3.75h6m-9 4.5h9m-9 4.5h7.5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <span>Hợp Đồng</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link"
                                    to="/invoices"
                                    role="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="nav-link-icon" height="18" width="18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 10.511H10.5" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 14.261H8.25" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 18.011H8.25" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V6C0.75 5.60218 0.908035 5.22064 1.18934 4.93934C1.47064 4.65804 1.85218 4.5 2.25 4.5H6C6 3.50544 6.39509 2.55161 7.09835 1.84835C7.80161 1.14509 8.75544 0.75 9.75 0.75C10.7446 0.75 11.6984 1.14509 12.4017 1.84835C13.1049 2.55161 13.5 3.50544 13.5 4.5H17.25C17.6478 4.5 18.0294 4.65804 18.3107 4.93934C18.592 5.22064 18.75 5.60218 18.75 6V8.25" /><path stroke="currentColor" stroke-width="1.5" d="M9.75 4.51099C9.54289 4.51099 9.375 4.34309 9.375 4.13599C9.375 3.92888 9.54289 3.76099 9.75 3.76099" /><path stroke="currentColor" stroke-width="1.5" d="M9.75 4.51099C9.95711 4.51099 10.125 4.34309 10.125 4.13599C10.125 3.92888 9.95711 3.76099 9.75 3.76099" /><g><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.9239 15.505L17.0189 19.379C16.9543 19.4649 16.8721 19.536 16.7776 19.5873C16.6832 19.6387 16.5789 19.6692 16.4717 19.6768C16.3645 19.6844 16.2569 19.6689 16.1562 19.6313C16.0555 19.5937 15.964 19.535 15.8879 19.459L14.3879 17.959" /></g></svg>
                                    <span>Hóa Đơn</span>
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link"
                                    to="/services"
                                    role="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 18 18" class="nav-link-icon" height="18" width="18" id="Room-Service--Streamline-Rounded----Material-Symbols">
                                        <path fill="#9ea9b4" d="M1.9479166666666667 13.458333333333334C1.7944456250000003 13.458333333333334 1.6675335416666668 13.408147916666667 1.5671875 13.307812500000002C1.4668414583333336 13.207477083333334 1.4166666666666667 13.080543750000002 1.4166666666666667 12.927083333333334C1.4166666666666667 12.773622916666666 1.4668414583333336 12.646689583333334 1.5671875 12.546354166666667C1.6675335416666668 12.44601875 1.7944456250000003 12.395833333333334 1.9479166666666667 12.395833333333334H15.052083333333334C15.205543750000002 12.395833333333334 15.332477083333334 12.44601875 15.432812500000002 12.546354166666667C15.533147916666667 12.646689583333334 15.583333333333334 12.773622916666666 15.583333333333334 12.927083333333334C15.583333333333334 13.080543750000002 15.533147916666667 13.207477083333334 15.432812500000002 13.307812500000002C15.332477083333334 13.408147916666667 15.205543750000002 13.458333333333334 15.052083333333334 13.458333333333334H1.9479166666666667ZM1.9479166666666667 11.333333333333334V11.032291666666667C1.9479166666666667 9.20241875 2.4703125 7.7267479166666675 3.515104166666667 6.605208333333334C4.559895833333334 5.4836687500000005 5.8673729166666675 4.757627083333333 7.4375 4.427083333333334V3.8958333333333335C7.4375 3.5888770833333337 7.537835416666668 3.335070625 7.738541666666667 3.134375C7.939247916666667 2.933679375 8.19304375 2.8333333333333335 8.5 2.8333333333333335C8.80695625 2.8333333333333335 9.060752083333334 2.933679375 9.261458333333334 3.134375C9.462164583333333 3.335070625 9.5625 3.5888770833333337 9.5625 3.8958333333333335V4.427083333333334C11.132627083333334 4.757627083333333 12.440104166666668 5.4836687500000005 13.484895833333335 6.605208333333334C14.5296875 7.7267479166666675 15.052083333333334 9.20241875 15.052083333333334 11.032291666666667V11.333333333333334H1.9479166666666667ZM3.063541666666667 10.270833333333334H13.936458333333334C13.77116875 8.759710416666667 13.166145833333333 7.576227083333333 12.121354166666668 6.720312500000001C11.0765625 5.864397916666666 9.863541666666668 5.436458333333333 8.482291666666667 5.436458333333333C7.101041666666667 5.436458333333333 5.893935416666667 5.864397916666666 4.8609375 6.720312500000001C3.8279395833333334 7.576227083333333 3.228820625 8.759710416666667 3.063541666666667 10.270833333333334Z" stroke-width="1"></path>
                                    </svg>
                                    <span>Dịch Vụ</span>
                                </NavLink>
                            </li>

                        </ul>
                        {/* End of Navigation */}
                    </div>
                    {/* End of Collapse */}
                </div>
            </nav>
        </>
    );
}
