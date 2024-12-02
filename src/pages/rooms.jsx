import React from 'react';
import RoomServices from '../services/RoomServices';
import {Button, Select, Spin} from 'antd';
import RoomForm from "../components/room/RoomForm.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import RoomsTable from "../components/room/RoomTable.jsx";
import useRoomsQuery from "../hooks/useRoomsQuery.js";
import useModal from "../hooks/useModal.js";
import {useQueryClient} from "@tanstack/react-query";
import TableControls from "../components/TableControls.jsx";
import useTableFilters from "../hooks/useTableFilters.js";
import useSaveOrUpdateMutation from "../hooks/useSaveOrUpdateMutation.js";
import useDeleteMutation from "../hooks/useDeleteMutation.js";
import PaginationButtons from "../components/PaginationButtons.jsx";
import PageHeader from "../components/PageHeader.jsx";
import {useNavigate} from "react-router";
import ModalPrintInvoices from "../components/invoices/ModalPrintInvoices.jsx";
import ModalGenerateInvoices from "../components/invoices/ModalGenerateInvoices.jsx";
import InvoiceServices from "../services/InvoiceServices.js";
import {toast} from "react-toastify";
import ModalCheckin from "../components/contract/ModalCheckin.jsx";
import ContractServices from "../services/ContractServices.js";

export default function Rooms() {
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

    const {data, isLoading} = useRoomsQuery({page, size, status, search, sort});
    const rooms = data?.rooms || [];
    const pagination = data?.pagination || {totalPages: 1, currentPage: 0, pageSize: 10};
    const deleteModal = useModal();
    const roomFormModal = useModal();
    const generateInvoicesModal = useModal();
    const printInvoicesModal = useModal();
    const checkinModal = useModal();

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, roomFormModal, RoomServices.saveOrUpdateRoom);
    const deleteMutation = useDeleteMutation(queryClient, deleteModal, RoomServices.deleteRoom, filters, setFilters, rooms);

    const statuses = [
        {label: 'Tất cả', value: ''},
        {label: 'Đã cho thuê', value: 'RENTED'},
        {label: 'Còn trống', value: 'AVAILABLE'},
    ]

    const navigate = useNavigate();

    const onContractsView = (code) => {
        navigate(`/contracts?roomCode=${code}`);
    }

    const handleGenerateInvoices = async (values) => {
        try {
            generateInvoicesModal.closeModal();
            const {data} = await InvoiceServices.generateInvoices(values);
            if (data) {
                toast.success('Sinh hóa đơn thành công');
            }

            // Refresh the rooms list
            queryClient.invalidateQueries('invoices');
        } catch (error) {
            console.log(error);
        }
    }

    const handlePrintInvoices = (values) => {
        printInvoicesModal.closeModal();
        const data = {
            month: values.split('/')[0],
            year: values.split('/')[1]
        }
        const token = localStorage.getItem('accessToken'); // Retrieve the JWT token from local storage
        const url = InvoiceServices.printInvoices(data);
        const printWindow = window.open(url, '_blank');
    
        // Add the JWT token to the request headers
        printWindow.onload = () => {
            printWindow.fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        };
    }

    let handleCheckin = async (values) => {
        await ContractServices.checkin(values);
        toast.success('Cho thuê phòng thành công');
        checkinModal.closeModal();
        queryClient.invalidateQueries('rooms');
        queryClient.invalidateQueries('contracts');
    };
    const openCheckinModal = (room) => {
        if (room.status === 'RENTED') {
            toast.error('Phòng đã được cho thuê');
            return;
        }
        checkinModal.openModal(room);
    };
    return (
        <div className="container-fluid">
            <PageHeader
                title="Danh sách phòng"
            />

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <TableControls
                            title="Phòng"
                            onSearch={handleSearch}
                            onAdd={() => roomFormModal.openModal()}
                        >
                            {/* Ant Design Select */}
                            <Select
                                className="mw-md-300px ms-md-auto mt-3 mt-md-0 mb-3 mb-md-0"
                                value={status || ''}
                                onChange={(value) => handleFilterChange({fieldName: 'status', newValue: value})}
                                placeholder="Chọn trạng thái"
                                allowClear
                            >
                                {statuses.map((status) => (
                                    <Select.Option key={status.key + status.value} value={status.value}>
                                        {status.label}
                                    </Select.Option>
                                ))}
                            </Select>

                            {/* Các nút thêm vào */}
                            <Button type="primary" style={{backgroundColor: '#1abc9c', color: '#fff'}}
                                    onClick={generateInvoicesModal.openModal}>
                                Sinh tất cả hóa đơn tiền nhà
                            </Button>
                            <Button type="default" style={{backgroundColor: '#9b59b6', color: '#fff'}}
                                    onClick={() => console.log('Nhập dữ liệu')}>
                                Nhập dữ liệu
                            </Button>
                            <Button type="default" style={{backgroundColor: '#e67e22', color: '#fff'}}
                                    onClick={printInvoicesModal.openModal}>
                                In tất cả hóa đơn
                            </Button>
                            <Button type="primary" onClick={() => console.log('Gửi hóa đơn')}>
                                Gửi hóa đơn
                            </Button>
                        </TableControls>


                        <div className="table-responsive">
                            {isLoading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : rooms.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy phòng nào</h3>
                                </div>
                            ) : (
                                <RoomsTable
                                    rooms={rooms}
                                    openRoomForm={roomFormModal.openModal}
                                    openDeleteConfirm={deleteModal.openModal}
                                    onSort={handleSort}
                                    currentSort={sort}
                                    onContractsView={onContractsView}
                                    onCheckin={openCheckinModal}
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
                visible={roomFormModal.isOpen}
                isEditMode={roomFormModal.isEditMode}
                currentRoom={roomFormModal.selectedData}
                onSubmit={(values) => saveOrUpdateMutation.mutate(values)}
                onCancel={roomFormModal.closeModal}
            />

            <DeleteModal
                visible={deleteModal.isOpen}
                onConfirm={() => deleteMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            />

            <ModalCheckin
                visible={checkinModal.isOpen}
                room={checkinModal.selectedData}
                onClose={checkinModal.closeModal}
                onSubmit={handleCheckin}
            />

            <ModalGenerateInvoices
                visible={generateInvoicesModal.isOpen}
                onCancel={generateInvoicesModal.closeModal}
                onSubmit={handleGenerateInvoices}
            />

            {/* Modal In Hóa Đơn */}
            <ModalPrintInvoices
                visible={printInvoicesModal.isOpen}
                onCancel={printInvoicesModal.closeModal}
                onPrint={handlePrintInvoices}
            />
        </div>
    );
}
