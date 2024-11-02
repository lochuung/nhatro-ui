import React from 'react';
import SearchInput from '../components/SearchInput.jsx';

const TableControls = ({ onSearch, onAdd, children, title = 'Title'}) => (
    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
        <h2 className="card-header-title h4 text-uppercase">{title}</h2>
        <SearchInput onSearch={onSearch} />
        {children}
        <button type="button" className="btn btn-primary ms-md-4" onClick={onAdd}>
            Thêm mới
        </button>
    </div>
);

export default TableControls;
