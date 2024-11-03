import {useQuery} from '@tanstack/react-query';
import ServiceServices from "../services/ServiceServices.js";
import buildSearchData from "../utils/BuildQueryData.js";

const useServicesQuery = ({page = 0, size = 10, search = null, sort = null}) => {
    return useQuery({
        queryKey: ['services', {page, size, status, search, sort}],
        queryFn: async () => {
            const data = buildSearchData({page, size, search, sort});
            const response = await ServiceServices.getServices(data);
            // Return structured data as expected by the consuming components
            return {
                services: response.data.content,
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

export default useServicesQuery;
