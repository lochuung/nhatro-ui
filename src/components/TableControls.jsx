import React from 'react';
import SearchInput from '../components/SearchInput.jsx';
import {IoIosArrowBack} from "react-icons/io";

const TableControls = ({onSearch, onAdd, children, title = 'Title'}) => {
    return (
        <div className="card-header border-0">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                <h2 className="card-header-title h4 text-uppercase me-auto">{title}</h2>
                {onSearch && <SearchInput onSearch={onSearch}/>}
                {children}
                {onAdd && (
                    <button className="btn btn-primary ms-md-auto mt-3 mt-md-0" onClick={onAdd}>
                        <i className="bi bi-plus me-2"/>
                        Thêm
                    </button>
                )}
            </div>
        </div>
    )
};

export default TableControls;
