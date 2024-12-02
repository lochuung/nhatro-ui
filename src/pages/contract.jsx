import React, {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";
import useTableFilters from "../hooks/useTableFilters.js";
import useModal from "../hooks/useModal.js";
import useSaveOrUpdateMutation from "../hooks/useSaveOrUpdateMutation.js";
import useDeleteMutation from "../hooks/useDeleteMutation.js";
import {useLocation, useNavigate} from "react-router";
import PageHeader from "../components/PageHeader.jsx";
import TableControls from "../components/TableControls.jsx";
import {Spin} from "antd";
import PaginationButtons from "../components/PaginationButtons.jsx";
import RoomForm from "../components/room/RoomForm.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import useContractsQuery from "../hooks/useContractsQuery.js";
import ContractServices from "../services/ContractServices.js";
import ContractTable from "../components/contract/ContractTable.jsx";
import ModalViewContract from "../components/contract/ModalViewContract.jsx";
import ModalCheckout from "../components/contract/ModalCheckout.jsx";
import {toast} from "react-toastify";
import ModalEditMembers from "../components/contract/ModalEditMembers.jsx";
import { downloadFileWithAuth } from '../utils/printUtils';

export default function Contract() {
    const queryClient = useQueryClient();
    const location = useLocation();
    const {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange} = useTableFilters({
        page: 0,
        size: 6,
        roomCode: '',
        search: '',
        sort: null,
        status: '',
    });

    useEffect(() => {
        const roomCode = new URLSearchParams(location.search).get('roomCode') || '';
        setFilters({...filters, roomCode});
    }, [location.search]);

    // Destructure filters and pass them to the query
    const {page, size, search, roomCode, status, sort} = filters;

    const {data, isLoading} = useContractsQuery({page, size, status, search, roomCode, sort});
    const contracts = data?.contracts || [];
    const pagination = data?.pagination || {totalPages: 1, currentPage: 0, pageSize: 10};
    const deleteModal = useModal();
    const formModal = useModal();
    const viewModal = useModal();
    const editMembersModal = useModal();
    const checkoutModal = useModal();

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, formModal, ContractServices.saveOrUpdateContract);
    const deleteMutation = useDeleteMutation(queryClient, deleteModal, ContractServices.deleteContract, filters, setFilters, contracts);

    const statuses = [
        {label: 'Tất cả', value: ''},
        {label: "Đang mở", value: 'OPENING'},
        {label: "Đã kết thúc", value: 'CLOSED'},
    ]

    const onPrint = (id) => {
        const url = ContractServices.getPrintUrl(id);
        downloadFileWithAuth(url, `contract-${id}.docx`);
    };

    const navigate = useNavigate();

    const onInvoicesView = (id) => {
        navigate(`/invoices?contractId=${id}`);
    }

    const contractWithData = async (c, callback) => {
        const contract = await ContractServices.getContract(c?.id);
        callback(contract.data);
    }

    const checkoutSubmit = async (values) => {
        const {data} = await ContractServices.checkout(values);
        if (data) {
            toast.success('Trả phòng thành công');
            queryClient.invalidateQueries('contracts');
            checkoutModal.closeModal();
        }
    }

    const onAddMembers = async (dt) => {
        const {data} = await ContractServices.addMembers(dt);
        if (data) {
            toast.success('Thêm thành viên thành công');
            queryClient.invalidateQueries('contracts');
            editMembersModal.closeModal();
        }
        if (data.error) {
            // toast.error(data.error.response.data.description);
        }
    };

    const onChangeOwner = async (dt) => {
        const {data} = await ContractServices.changeOwner(dt);
        if (data) {
            toast.success('Thay đổi chủ phòng thành công');
            queryClient.invalidateQueries('contracts');
            editMembersModal.closeModal();
        }
        if (data.error) {
            // toast.error(data.error.response.data.description);
        }
    }

    const onLeave = async (dt) => {
        const {data} = await ContractServices.leave(dt);
        if (data) {
            toast.success('Rời phòng thành công');
            queryClient.invalidateQueries('contracts');
            editMembersModal.closeModal();
        }
        if (data.error) {
            toast.error(data.error.response.data.description);
        }
    }

    return (
        <div className="container-fluid">
            <PageHeader
                title="Danh sách hợp đồng"
            />

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <TableControls
                            title={`Hợp đồng (${roomCode || 'Tất cả'})`}
                            onSearch={handleSearch}
                        >
                            <select
                                className="form-control mw-md-300px ms-md-auto mt-5
                                mt-md-0 mb-3 mb-md-0"
                                value={status || ''}
                                onChange={(e) => handleFilterChange({fieldName: 'status', newValue: e.target.value})}
                            >
                                {statuses.map((status) => (
                                    <option key={status.key + status.value} value={status.value}>{status.label}</option>
                                ))}
                            </select>
                        </TableControls>

                        <div className="table-responsive">
                            {isLoading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : contracts.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy hợp đồng nào</h3>
                                </div>
                            ) : (
                                <ContractTable
                                    datas={contracts}
                                    openRoomForm={formModal.openModal}
                                    // openDelete={deleteModal.openModal}
                                    onSort={handleSort}
                                    currentSort={sort}
                                    onPrint={onPrint}
                                    onInvoicesView={onInvoicesView}
                                    onView={(c) => contractWithData(c, viewModal.openModal)}
                                    onCheckout={checkoutModal.openModal}
                                    onEditMembers={(c) => contractWithData(c, editMembersModal.openModal)}
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

            <RoomForm
                visible={formModal.isOpen}
                isEditMode={formModal.isEditMode}
                currentRoom={formModal.selectedData}
                onSubmit={(values) => saveOrUpdateMutation.mutate(values)}
                onCancel={formModal.closeModal}
            />

            {/* <DeleteModal
                visible={deleteModal.isOpen}
                onConfirm={() => deleteMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            /> */}

            <ModalViewContract
                visible={viewModal.isOpen}
                contract={viewModal.selectedData}
                onClose={viewModal.closeModal}
            />

            <ModalEditMembers
                visible={editMembersModal.isOpen}
                contract={editMembersModal.selectedData}
                onClose={editMembersModal.closeModal}
                onAddMembers={onAddMembers}
                onChangeOwner={onChangeOwner}
                onLeave={onLeave}
            />

            <ModalCheckout
                visible={checkoutModal.isOpen}
                contract={checkoutModal.selectedData}
                onClose={checkoutModal.closeModal}
                onSubmit={checkoutSubmit}
            />
        </div>
    );
}