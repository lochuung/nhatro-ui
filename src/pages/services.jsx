import {useMemo, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Spin} from "antd";
import ServiceTable from "../components/services_fee/ServiceTable.jsx";
import useServicesQuery from "../hooks/useServicesQuery.js";
import useModal from "../hooks/useModal.js";
import SearchInput from "../components/SearchInput.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import ServiceFeeForm from "../components/services_fee/ServiceFeeForm.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";
import useTableFilters from "../hooks/useTableFilters.js";
import useSaveOrUpdateMutation from "../hooks/useSaveOrUpdateMutation.js";
import RoomServices from "../services/RoomServices.js";
import useDeleteMutation from "../hooks/useDeleteMutation.js";
import ServiceServices from "../services/ServiceServices.js";


export default function Services() {
    const queryClient = useQueryClient();
    const {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange} = useTableFilters({
        page: 0,
        size: 10,
        status: null,
        search: '',
        sort: null,
    });

    // Destructure filters and pass them to the query
    const {page, size, search, sort} = filters;

    const {data, isLoading} = useServicesQuery({page, size, search, sort});
    const services = data?.services || [];
    const pagination = data?.pagination || {totalPages: 1, currentPage: 0, pageSize: 10};
    const {totalPages} = pagination;

    const deleteModal = useModal();
    const serviceFormModal = useModal();

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, serviceFormModal, ServiceServices.saveOrUpdateService);
    const deleteServiceMutation = useDeleteMutation(queryClient, deleteModal, ServiceServices.deleteService, filters, setFilters, services);

    const handleServiceFormSubmit = (values) => {
        saveOrUpdateMutation.mutate(values);
    };
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                <h1 className="h2">Danh sách dịch vụ</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Danh sách dịch vụ
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <div className="card-header border-0">
                            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                                <h2 className="card-header-title h4 text-uppercase">Danh sách dịch vụ</h2>
                                <SearchInput onSearch={handleSearch}/>
                                <button type="button" className="btn btn-primary ms-md-4"
                                        onClick={() => serviceFormModal.openModal()}>
                                    Thêm mới
                                </button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            {isLoading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : services.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy dịch vụ nào</h3>
                                </div>
                            ) : (
                                <ServiceTable
                                    services={services}
                                    openServiceFeeForm={serviceFormModal.openModal}
                                    openDeleteConfirm={deleteModal.openModal}
                                />
                            )}
                        </div>

                        <div className="card-footer">
                            <ul className="pagination justify-content-end list-pagination mb-0">
                                <PaginationButtons
                                    currentPage={page}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceFeeForm
                visible={serviceFormModal.isOpen}
                isEditMode={serviceFormModal.isEditMode}
                currentServiceFee={serviceFormModal.selectedData}
                onSubmit={handleServiceFormSubmit}
                onCancel={serviceFormModal.closeModal}
            />

            {/* Delete Confirmation Modal */}
            <DeleteModal
                visible={deleteModal.isOpen}
                onConfirm={() => deleteServiceMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            />
        </div>
    );
}