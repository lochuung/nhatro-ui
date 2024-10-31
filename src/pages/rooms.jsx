import {useCallback, useMemo, useState} from 'react';
import RoomServices from '../services/RoomServices';
import {Spin} from 'antd';
import RoomForm from "../components/room/RoomForm.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import SearchInput from "../components/SearchInput.jsx";
import RoomsTable from "../components/room/RoomTable.jsx";
import useRoomsQuery from "../hooks/useRoomsQuery.js";
import useModal from "../hooks/useModal.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export default function Rooms() {
    const [filters, setFilters] = useState({
        page: 0,
        size: 10,
        status: null,
        search: '',
        sort: null,
    });

    const queryClient = useQueryClient();

    // Destructure filters and pass them to the query
    const { page, size, status, search, sort } = filters;

    const { data, isLoading } = useRoomsQuery({ page, size, status, search, sort });
    const rooms = data?.rooms || [];
    const pagination = data?.pagination || { totalPages: 1, currentPage: 0, pageSize: 10 };
    const { totalPages } = pagination;

    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const deleteModal = useModal();
    const roomFormModal = useModal();

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

    // Mutation for saving or updating a room
    const saveOrUpdateMutation = useMutation({
        mutationFn: (values) => {
            if (roomFormModal.isEditMode) {
                return RoomServices.saveOrUpdateRoom(roomFormModal.selectedRoom.id, values);
            } else {
                return RoomServices.createRoom(values);
            }
        },
        onSuccess: () => {
            roomFormModal.closeModal();
            queryClient.invalidateQueries(['rooms']); // Invalidate queries on success
        },
    });

    const handleRoomFormSubmit = (values) => {
        saveOrUpdateMutation.mutate(values);
    };

    // Mutation for deleting a room
    const deleteRoomMutation = useMutation({
        mutationFn: (roomId) => RoomServices.deleteRoom(roomId),
        onSuccess: () => {
            deleteModal.closeModal();
            queryClient.invalidateQueries(['rooms']);
            // Adjust pagination if the last item of the page was deleted
            if (rooms.length === 1 && page > 0) {
                setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
            }
        },
    });

    // Open delete confirmation modal
    const openDeleteConfirm = (roomId) => {
        setSelectedRoomId(roomId);
        deleteModal.openModal();
    };

    const handleDeleteConfirm = () => {
        deleteRoomMutation.mutate(selectedRoomId);
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
                            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-end">
                                <h2 className="card-header-title h4 text-uppercase">Danh sách phòng</h2>
                                <SearchInput onSearch={handleSearch}/>
                                <select
                                    className="form-control mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                                    value={status || ''}
                                    onChange={(e) => handleFilterChange(e.target.value)}
                                >
                                    <option value="">Tất cả</option>
                                    <option value="RENTED">Đã cho thuê</option>
                                    <option value="AVAILABLE">Còn trống</option>
                                </select>
                                <button type="button" className="btn btn-primary ms-md-4"
                                        onClick={() => roomFormModal.openModal()}>
                                    Thêm mới
                                </button>
                            </div>
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
                                    loading={isLoading}
                                    openRoomForm={roomFormModal.openModal}
                                    openDeleteConfirm={openDeleteConfirm}
                                    onSort={handleSort}
                                    currentSort={sort}
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

            {/* Add/Edit Modal */}
            <RoomForm
                visible={roomFormModal.isOpen}
                isEditMode={roomFormModal.isEditMode}
                currentRoom={roomFormModal.selectedRoom}
                onSubmit={handleRoomFormSubmit}
                onCancel={roomFormModal.closeModal}
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