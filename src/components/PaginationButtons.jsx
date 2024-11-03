import React from 'react';

const PaginationButtons = ({totalPages, currentPage, onPageChange}) => (
    <ul className="pagination justify-content-end list-pagination mb-0">
        {Array.from({length: totalPages}, (_, index) => (
            <li key={'page-' + index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(index)}>
                    {index + 1}
                </button>
            </li>
        ))}
    </ul>
);

export default PaginationButtons;
