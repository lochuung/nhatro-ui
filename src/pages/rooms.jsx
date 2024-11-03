import React from 'react';
import RoomServices from '../services/RoomServices';
import {Spin} from 'antd';
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

export default function Rooms() {
    const queryClient = useQueryClient();
    const {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange} = useTableFilters({
        page: 0,
        size: 10,
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

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, roomFormModal, RoomServices.saveOrUpdateRoom);
    const deleteRoomMutation = useDeleteMutation(queryClient, deleteModal, RoomServices.deleteRoom, filters, setFilters, rooms);

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                <h1 className="h2">Danh sách phòng</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Danh sách phòng
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <div className="card-header border-0">
                            <TableControls
                                title="Danh sách phòng"
                                onSearch={handleSearch}
                                onAdd={() => roomFormModal.openModal()}
                            >
                                <select
                                    className="form-control mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                                    value={status || ''}
                                    onChange={(e) => handleFilterChange(e.target.value)}
                                >
                                    <option value="">Tất cả</option>
                                    <option value="RENTED">Đã cho thuê</option>
                                    <option value="AVAILABLE">Còn trống</option>
                                </select>
                            </TableControls>
                        </div>

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
                onConfirm={() => deleteRoomMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            />
        </div>
    );
}
