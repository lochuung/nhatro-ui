import {useQuery} from '@tanstack/react-query';

import {buildSearchData} from '../utils/BuildQueryData.js';
import ContractServices from "../services/ContractServices.js";

// Custom hook for fetching rooms
const useContractsQuery = ({page = 0, size = 10, status = null,search = null, roomCode = null, sort = null}) => {
    return useQuery({
        queryKey: ['contracts', {page, size, search, status, roomCode, sort}],
        queryFn: async () => {
            const data = buildSearchData({page, size, status, search, sort});

            data['roomCode'] = roomCode;

            const response = await ContractServices.getContracts(data);
            // Return structured data as expected by the consuming components
            return {
                contracts: response.data.content,
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

export default useContractsQuery;
