import {useQuery} from '@tanstack/react-query';
import RoomServices from '../services/RoomServices';

// Custom hook for fetching rooms
const useRoomsQuery = ({page = 0, size = 10, status = null, search = null, sort = null}) => {
    return useQuery({
        queryKey: ['rooms', {page, size, status, search, sort}],
        queryFn: async () => {
            const data = {page, size};
            if (status) {
                data['filters'] = [{key: 'status', operator: 'EQUAL', fieldType: 'STRING', value: status}];
            }
            if (search) {
                data['filters'] = data['filters'] || [];
                data['filters'].push({key: 'name', operator: 'LIKE_OR', fieldType: 'STRING', value: search});
                data['filters'].push({key: 'code', operator: 'LIKE_OR', fieldType: 'STRING', value: search});
            }
            if (sort) {
                data['sorts'] = data['sorts'] || [];
                data['sorts'].push({key: sort.column, direction: sort.direction});
            }
            const response = await RoomServices.getRooms(data);
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
