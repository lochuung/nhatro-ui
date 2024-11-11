import {useQuery} from '@tanstack/react-query';
import InvoiceServices from '../services/InvoiceServices';

import {buildSearchData} from '../utils/BuildQueryData.js';

const useInvoicesQuery = ({page = 0, contractId = null, size = 10, room = null, month = null, paymentStatus = null,
                              type = null, search, sort}) => {
    return useQuery({
        queryKey: ['invoices', {page, size, room, month, paymentStatus, type, search, sort, contractId}],
        queryFn: async () => {
            const data = buildSearchData({page, size, search, sort,
            searchProperties: null});

            data['contractId'] = contractId;
            data['roomId'] = room;
            data['month'] = month;
            data['isPaid'] = paymentStatus === 'paid' ? true : paymentStatus === 'unpaid' ? false : null;
            data['keyword'] = search;
            data['type'] = type ? type : null;

            const response = await InvoiceServices.getInvoices(data);
            // Return structured data as expected by the consuming components
            return {
                invoices: response.data.content,
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

export default useInvoicesQuery;
