import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PageHeader = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center mb-3">
                <h1 className="h2 mb-0">{title}</h1>
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>
        </div>
    );
}

export default PageHeader;
