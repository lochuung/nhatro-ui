import {useState} from 'react';
import RoomServices from '../services/RoomServices';
import {Form, Input, Modal, Select, Spin, Button} from 'antd';
import RoomForm from "../components/room/RoomForm.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import {useRooms} from "../hooks/useRooms.js";
import SearchInput from "../components/SearchInput.jsx";
import SortableRoomsTable from "../components/room/SortableRoomsTable.jsx";

const {Option} = Select;

export default function Rooms() {

    const {rooms, totalPages, currentPage, statusFilter, loading, handlePageChange, handleFilterChange, handleSearch} = useRooms();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [currentRoom, setCurrentRoom] = useState({
        name: '',
        description: '',
        price: '',
        status: 'AVAILABLE',
        capacity: 0,
        type: '',
        branchId: 1,
    });

    const openRoomForm = (room = null) => {
        debugger;
        if (room) {
            setCurrentRoom(room);
            setIsEditMode(true);
        } else {
            setCurrentRoom({
                name: '',
                description: '',
                price: '',
                status: 'AVAILABLE',
                capacity: 0,
                type: '',
                branchId: 1
            });
            setIsEditMode(false);
        }
        setIsModalOpen(true);
    };

    const handleRoomFormSubmit = async (values) => {
        if (isEditMode) {
            await RoomServices.saveOrUpdateRoom(currentRoom.id, values);
        } else {
            await RoomServices.createRoom(values);
        }
        setIsModalOpen(false);
        handleFilterChange(statusFilter); // Refresh room list after add/update
    };

    const openDeleteConfirm = (roomId) => {
        setSelectedRoomId(roomId);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        await RoomServices.deleteRoom(selectedRoomId);
        setIsDeleteModalOpen(false);
        handleFilterChange(statusFilter); // Refresh room list after deletion
    };

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                <h1 className="h2">Danh sách phòng</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Trang chủ</a>
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
                                {/* Ant Design Search Input */}
                                <SearchInput onSearch={handleSearch} />
                                <select
                                    className="form-control mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                                    value={statusFilter}
                                    onChange={(e) => {
                                        const newStatus = e.target.value;
                                        handleFilterChange(newStatus);
                                    }}
                                >
                                    <option value="">Tất cả</option>
                                    <option value="RENTED">Đã cho thuê</option>
                                    <option value="AVAILABLE">Còn trống</option>
                                </select>
                                <button type="button" className="btn btn-primary ms-md-4"
                                        onClick={() => openRoomForm()}>
                                    Thêm mới
                                </button>
                            </div>
                        </div>

                        <div className="table-responsive">
                            {loading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : rooms.length === 0 ? (
                                <div className="text-center my-4">
                                    <h3>Không tìm thấy phòng nào</h3>
                                </div>
                            ) : (
                                // <table className="table align-middle table-hover table-nowrap mb-0">
                                //     <thead className="thead-light">
                                //     <tr>
                                //         <th>
                                //             <a href="javascript: void(0);" className="text-muted list-sort"
                                //                data-sort="name">
                                //                 Tên phòng
                                //             </a>
                                //         </th>
                                //         <th>
                                //             <a href="javascript: void(0);" className="text-muted list-sort"
                                //                data-sort="price">
                                //                 Giá
                                //             </a>
                                //         </th>
                                //         <th>
                                //             <a href="javascript: void(0);" className="text-muted list-sort"
                                //                data-sort="status">
                                //                 Trạng thái
                                //             </a>
                                //         </th>
                                //         <th>
                                //             <a href="javascript: void(0);" className="text-muted list-sort"
                                //                data-sort="numberOfPeople">
                                //                 Số người
                                //             </a>
                                //         </th>
                                //         <th className="text-end"></th>
                                //     </tr>
                                //     </thead>
                                //     <tbody  className="list">
                                //     {rooms.map((room) => (
                                //         <tr key={room.id}>
                                //             <td className="name">{room.name}</td>
                                //             <td className="price">
                                //                 {new Intl.NumberFormat('vi-VN', {
                                //                     style: 'currency',
                                //                     currency: 'VND',
                                //                 }).format(room.price)}
                                //             </td>
                                //             <td className="status">
                                //                 <span
                                //                     className={`legend-circle ${room.status === 'RENTED' ? 'bg-danger' : 'bg-success'}`}/>
                                //                 {room.status === 'RENTED' ? 'Đã cho thuê' : 'Trống'}
                                //             </td>
                                //             <td className="numberOfPeople">
                                //                 {room.contracts.find((contract) => contract.status === 'OPENING')?.numberOfPeople || '0'}
                                //             </td>
                                //             <td>
                                //                 <button className="btn btn-sm btn-secondary"
                                //                         onClick={() => openRoomForm(room)}>
                                //                     Chỉnh sửa
                                //                 </button>
                                //                 <button className="btn btn-sm btn-danger ms-2"
                                //                         onClick={() => openDeleteConfirm(room.id)}>
                                //                     Xóa
                                //                 </button>
                                //             </td>
                                //         </tr>
                                //     ))}
                                //     </tbody>
                                // </table>
                                <SortableRoomsTable
                                    rooms={rooms}
                                    loading={loading}
                                    openRoomForm={openRoomForm}
                                    openDeleteConfirm={openDeleteConfirm}
                                />
                            )}
                        </div>

                        <div className="card-footer">
                            <ul className="pagination justify-content-end list-pagination mb-0">
                                {Array.from({length: totalPages}, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => {
                                            handlePageChange(index);
                                        }}>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Add/Edit Modal */}
            <RoomForm
                visible={isModalOpen}
                isEditMode={isEditMode}
                currentRoom={currentRoom}
                onSubmit={handleRoomFormSubmit}
                onCancel={() => setIsModalOpen(false)}
            />

            {/* Delete Confirmation Modal */}
            <DeleteModal
                visible={isDeleteModalOpen}
                onConfirm={handleDeleteConfirm}
                onCancel={() => setIsDeleteModalOpen(false)}
            />
        </div>
    );
}
