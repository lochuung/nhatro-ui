import {useCallback, useState} from 'react';

const useTableFilters = (initialFilters = {page: 0, size: 10, search: '', sort: null}) => {
    const [filters, setFilters] = useState(initialFilters);

    const handlePageChange = useCallback((pageNumber) => {
        setFilters((prev) => ({...prev, page: pageNumber}));
    }, []);

    const handleSearch = useCallback((searchText) => {
        setFilters((prev) => ({...prev, search: searchText, page: 0}));
    }, []);

    const handleSort = useCallback((sort) => {
        setFilters((prev) => ({...prev, sort, page: 0}));
    }, []);

    const handleFilterChange = useCallback((newStatus) => {
        setFilters((prev) => ({...prev, status: newStatus, page: 0}));
    }, []);

    return {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange};
};

export default useTableFilters;
