import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const SearchInput = ({ placeholder, onSearch, debounceTime = 300 }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce the search function to prevent excessive API calls
    const debouncedSearch = useCallback(
        debounce((query) => {
            onSearch(query);
        }, 500), // Adjust the delay (in milliseconds) as needed
        []
    );

    // Update searchTerm and debounce the actual search function
    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        debouncedSearch(value);
    };

    return (
        <input
            className="form-control list-fuzzy-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
            type="search"
            placeholder={placeholder || 'Tìm kiếm...'}
            value={searchTerm}
            onChange={handleInputChange}
        />
    );
};
export default SearchInput;
