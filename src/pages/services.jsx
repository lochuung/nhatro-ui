import {useCallback, useMemo, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Spin} from "antd";
import ServiceTable from "../components/services_fee/ServiceTable.jsx";
import useServicesQuery from "../hooks/useServicesQuery.js";
import useModal from "../hooks/useModal.js";
import ServiceServices from "../services/ServiceServices.js";
import SearchInput from "../components/SearchInput.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import ServiceFeeForm from "../components/services_fee/ServiceFeeForm.jsx";


export default function Services() {
    const [filters, setFilters] = useState({
        page: 0,
        size: 2,
        search: '',
        sort: null,
    });

    const queryClient = useQueryClient();

    // Destructure filters and pass them to the query
    const { page, size, search, sort } = filters;

    const { data, isLoading } = useServicesQuery({ page, size, search, sort });
    const services = data?.services || [];
    const pagination = data?.pagination || { totalPages: 1, currentPage: 0, pageSize: 10 };
    const { totalPages } = pagination;

    const [selectedServiceId, setSelectedServiceId] = useState(null);
    const deleteModal = useModal();
    const serviceFormModal = useModal();

    // Handlers: Memoized to prevent unnecessary re-renders
    const handlePageChange = useCallback((pageNumber) => {
        setFilters((prev) => ({ ...prev, page: pageNumber }));
    }, []);

    const handleFilterChange = useCallback((newStatus) => {
        setFilters((prev) => ({ ...prev, status: newStatus, page: 0 }));
    }, []);

    const handleSearch = useCallback((newSearchText) => {
        setFilters((prev) => ({ ...prev, search: newSearchText, page: 0 }));
    }, []);

    const handleSort = useCallback(({ column, direction }) => {
        setFilters((prev) => ({
            ...prev,
            sort: direction ? { column, direction } : null,
        }));
    }, []);

    const saveOrUpdateMutation = useMutation({
        mutationFn: (values) => {
            if (serviceFormModal.isEditMode) {
                return ServiceServices.saveOrUpdateService(serviceFormModal.selectedData.id, values);
            } else {
                return ServiceServices.saveOrUpdateService(null, values);
            }
        },
        onSuccess: () => {
            serviceFormModal.closeModal();
            queryClient.invalidateQueries(['services']);
        },
    });

    const handleServiceFormSubmit = (values) => {
        saveOrUpdateMutation.mutate(values);
    };

    const deleteServiceMutation = useMutation({
        mutationFn: (serviceId) => ServiceServices.deleteService(serviceId),
        onSuccess: () => {
            deleteModal.closeModal();
            queryClient.invalidateQueries(['services']);
            // Adjust pagination if the last item of the page was deleted
            if (services.length === 1 && page > 0) {
                setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
            }
        },
    });

    // Open delete confirmation modal
    const openDeleteConfirm = (serviceId) => {
        setSelectedServiceId(serviceId);
        deleteModal.openModal();
    };

    const handleDeleteConfirm = () => {
        deleteServiceMutation.mutate(selectedServiceId);
    };

    // Memoize pagination buttons to avoid unnecessary re-renders
    const paginationButtons = useMemo(() => (
        Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${page === index ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index)}>
                    {index + 1}
                </button>
            </li>
        ))
    ), [totalPages, page, handlePageChange]);
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
                                    openDeleteConfirm={openDeleteConfirm}
                                />
                            )}
                        </div>

                        <div className="card-footer">
                            <ul className="pagination justify-content-end list-pagination mb-0">
                                {paginationButtons}
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
                onConfirm={handleDeleteConfirm}
                onCancel={deleteModal.closeModal}
            />
        </div>
    );
}