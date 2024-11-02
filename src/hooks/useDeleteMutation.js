import {useMutation} from '@tanstack/react-query';

const useDeleteMutation = (queryClient, deleteModal, deleteService, filters, setFilters, items) => {
    return useMutation({
        mutationFn: (id) => deleteService(id),
        onSuccess: () => {
            deleteModal.closeModal();
            queryClient.invalidateQueries([deleteModal.queryKey]);
            if (items.length === 1 && filters.page > 0) {
                setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
            }
        },
    });
};

export default useDeleteMutation;
