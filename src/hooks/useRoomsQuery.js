import {useQuery} from '@tanstack/react-query';
import RoomServices from '../services/RoomServices';

// Custom hook for fetching rooms
const useRoomsQuery = ({ page = 0, size = 10, status = null, search = null, sort = null }) => {
    return useQuery({
        queryKey: ['rooms', { page, size, status, search, sort }],
        queryFn: async () => {
            const response = await RoomServices.getRooms(page, size, status, search, sort);
            // Return structured data as expected by the consuming components
            return {
                rooms: response.data.content,
                pagination: {
                    totalPages: response.data.totalPages,
                    totalElements: response.data.totalElements,
                    currentPage: response.data.pageable.pageNumber,
                    pageSize: response.data.pageable.pageSize,
                }
            };
        },
        keepPreviousData: true, // Keeps previous data while fetching new
    });
};

export default useRoomsQuery;
