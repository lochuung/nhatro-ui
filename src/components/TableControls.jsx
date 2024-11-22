import React from 'react';
import SearchInput from '../components/SearchInput.jsx';
import {Space} from 'antd';

const TableControls = ({onSearch, onAdd, children, title = 'Title', addTitle = 'Thêm'}) => {
    return (
        <div className="card-header border-0">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                <h2 className="card-header-title h4 text-uppercase me-auto">{title}</h2>
                {onSearch && <SearchInput onSearch={onSearch}/>}
                <Space className="ms-3">{children}</Space>
                {onAdd && (
                    <button className="btn btn-primary ms-md-auto mt-3 mt-md-0" onClick={onAdd}>
                        {addTitle}
                    </button>
                )}
            </div>
        </div>
    )
};

export default TableControls;
