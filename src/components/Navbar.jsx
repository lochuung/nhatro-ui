import {NavLink} from "react-router-dom";
import {FiFileText, FiHome, FiUser} from "react-icons/fi"; // Feather Icons
import {MdReceipt, MdRoomService, MdSettings} from "react-icons/md";

export default function Navbar() {
    const navItems = [
        {
            to: "/rooms",
            label: "Phòng",
            icon: <FiHome className="nav-link-icon" size={18}/>,
        },
        {
            to: "/contracts",
            label: "Hợp Đồng",
            icon: <FiFileText className="nav-link-icon" size={18}/>,
        },
        {
            to: "/customers",
            label: "Khách Hàng",
            icon: <FiUser className="nav-link-icon" size={18}/>,
        },
        {
            to: "/invoices",
            label: "Hóa Đơn",
            icon: <MdReceipt className="nav-link-icon" size={18}/>,
        },
        {
            to: "/services",
            label: "Dịch Vụ",
            icon: <MdRoomService className="nav-link-icon" size={18}/>,
        },
        {
            to: "/settings",
            label: "Cài Đặt",
            icon: <MdSettings className="nav-link-icon" size={18}/>,
        },
    ];

    return (
        <nav
            id="mainNavbar"
            className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark"
        >
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
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidenavCollapse"
                    aria-controls="sidenavCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="sidenavCollapse">
                    {/* Navigation */}
                    <ul className="navbar-nav mb-lg-7">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link" to={item.to}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* End of Navigation */}
                </div>
                {/* End of Collapse */}
            </div>
        </nav>
    );
}
