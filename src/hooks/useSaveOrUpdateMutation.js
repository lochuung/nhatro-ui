import {useMutation} from '@tanstack/react-query';

const useSaveOrUpdateMutation = (queryClient, formModal, saveOrUpdateService) => {
    return useMutation({
        mutationFn: (values) => {
            return formModal.isEditMode
                ? saveOrUpdateService(formModal.selectedData.id, values)
                : saveOrUpdateService(null, values);
        },
        onSuccess: () => {
            formModal.closeModal();
            queryClient.invalidateQueries([formModal.queryKey]);
        },
    });
};

export default useSaveOrUpdateMutation;
