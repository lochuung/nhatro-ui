import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRooms, setCurrentPage, setStatusFilter} from '../redux/roomsReducer';

export const useRooms = () => {
    const dispatch = useDispatch();
    const {rooms, totalPages, currentPage, pageSize, statusFilter, loading} = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms({page: currentPage, size: pageSize, status: statusFilter}));
    }, [dispatch, currentPage, pageSize, statusFilter]);

    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(fetchRooms({page: pageNumber, size: pageSize, status: statusFilter}));
    };

    const handleFilterChange = (newStatus) => {
        dispatch(setStatusFilter(newStatus));
        dispatch(setCurrentPage(0));
        dispatch(fetchRooms({page: 0, size: pageSize, status: newStatus}));
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
    };
};
