import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRooms, setCurrentPage, setStatusFilter, setSearchText} from '../redux/roomsReducer';

export const useRooms = () => {
    const dispatch = useDispatch();
    const {rooms, totalPages, currentPage, pageSize, statusFilter, loading, searchText} = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms({page: currentPage, size: pageSize, status: statusFilter, search: searchText}));
    }, [dispatch, currentPage, pageSize, statusFilter, searchText]);

    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    const handleFilterChange = (newStatus) => {
        dispatch(setStatusFilter(newStatus));
        dispatch(setCurrentPage(0));
    };

    const handleSearch = (newSearchText) => {
        dispatch(setCurrentPage(0));
        dispatch(setSearchText(newSearchText));
    };

    return {
        rooms,
        totalPages,
        currentPage,
        pageSize,
        statusFilter,
        loading,
        handlePageChange,
        handleFilterChange,
        handleSearch
    };
};
