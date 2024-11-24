import {useQueryClient} from "@tanstack/react-query";
import useTableFilters from "../hooks/useTableFilters.js";
import useModal from "../hooks/useModal.js";
import useSaveOrUpdateMutation from "../hooks/useSaveOrUpdateMutation.js";
import useDeleteMutation from "../hooks/useDeleteMutation.js";
import PageHeader from "../components/PageHeader.jsx";
import TableControls from "../components/TableControls.jsx";
import {Spin} from "antd";
import PaginationButtons from "../components/PaginationButtons.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import React from "react";
import useCustomerQuery from "../hooks/useCustomerQuery.js";
import CustomerServices from "../services/CustomerServices.js";
import CustomerTable from "../components/customer/CustomerTable.jsx";
import CustomerForm from "../components/customer/CustomerForm.jsx";
import ModalViewCustomer from "../components/customer/ModalViewCustomer.jsx";
import CustomerImageServices from "../services/CustomerImageServices.js";
import ApiUrl from "../utils/api-url.js";


const Customer = () => {
    const queryClient = useQueryClient();
    const {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange} = useTableFilters({
        page: 0,
        size: 6,
        status: null,
        search: '',
        sort: null,
    });

    // Destructure filters and pass them to the query
    const {page, size, status, search, sort} = filters;

    const {data, isLoading} = useCustomerQuery({page, size, status, search, sort});
    const customers = data?.customers || [];
    const pagination = data?.pagination || {totalPages: 1, currentPage: 0, pageSize: 10};
    const deleteModal = useModal();
    const formModal = useModal();
    const viewModal = useModal();

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, formModal, CustomerServices.saveOrUpdate);
    const deleteMutation = useDeleteMutation(queryClient, deleteModal, CustomerServices.delete, filters, setFilters, customers);
    const [cccdImages, setCccdImages] = React.useState([]);
    const handlView = async (data) => {
        CustomerImageServices.getCustomerImages(data.id).then((res) => {
            setCccdImages(res.data);
        });
        viewModal.openModal(data);
    }

    return (
        <div className="container-fluid">
            <PageHeader
                title="Danh sách khách thuê"
            />

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <TableControls
                            title="Khách thuê"
                            onSearch={handleSearch}
                            onAdd={() => formModal.openModal()}
                        >
                        </TableControls>


                        <div className="table-responsive">
                            {isLoading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : customers.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy khách thuê nào</h3>
                                </div>
                            ) : (
                                <CustomerTable
                                    customers={customers}
                                    openForm={formModal.openModal}
                                    openDeleteConfirm={deleteModal.openModal}
                                    onSort={handleSort}
                                    currentSort={sort}
                                    onView={handlView}
                                />
                            )}
                        </div>

                        <div className="card-footer">
                            <PaginationButtons
                                totalPages={pagination.totalPages}
                                currentPage={filters.page}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <CustomerForm
                visible={formModal.isOpen}
                isEditMode={formModal.isEditMode}
                customer={formModal.selectedData}
                onSubmit={(values) => saveOrUpdateMutation.mutate(values)}
                onCancel={formModal.closeModal}
            />

            <DeleteModal
                visible={deleteModal.isOpen}
                onConfirm={() => deleteMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            />

            <ModalViewCustomer
                visible={viewModal.isOpen}
                onClose={viewModal.closeModal}
                customerData={viewModal.selectedData}
                cccdImages={cccdImages}
            />

        </div>
    );
}

export default Customer;