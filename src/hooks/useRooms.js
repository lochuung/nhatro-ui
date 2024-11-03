import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRooms, setCurrentPage, setSearchText, setSort, setStatusFilter} from '../redux/roomsReducer';

export const useRooms = () => {
    const dispatch = useDispatch();
    const {rooms, totalPages, currentPage, pageSize, statusFilter, loading, searchText, sort} = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms({page: currentPage, size: pageSize, status: statusFilter, search: searchText, sort: sort}));
    }, [dispatch, currentPage, pageSize, statusFilter, searchText, sort]);

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

    const handleSort = ({column, direction}) => {
        if (direction === null) {
            dispatch(setSort(null));
            return;
        }
        dispatch(setSort({column, direction}));
    }

    return {
        rooms,
        totalPages,
        currentPage,
        pageSize,
        statusFilter,
        loading,
        sort,
        handlePageChange,
        handleFilterChange,
        handleSearch,
        handleSort
    };
};
