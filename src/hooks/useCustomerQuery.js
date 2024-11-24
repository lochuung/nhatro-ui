import {useQuery} from '@tanstack/react-query';

import {buildSearchData} from '../utils/BuildQueryData.js';
import CustomerServices from "../services/CustomerServices.js";

// Custom hook for fetching rooms
const useCustomersQuery = ({page = 0, size = 10, search = null, sort = null}) => {
    return useQuery({
        queryKey: ['customers', {page, size, search, sort}],
        queryFn: async () => {
            const data = buildSearchData({page, size, search, sort,
                searchProperties: ['name', 'phone']});

            const response = await CustomerServices.search(data);
            // Return structured data as expected by the consuming components
            return {
                customers: response.data.content,
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

export default useCustomersQuery;
