import { useState } from "react";

export default function Rooms() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Est Mauris Consulting",
      price: "3.900.000đ",
      statusColor: "bg-danger",
      statusText: "Đang bảo trì",
      created: "01.02.22",
      type: "Phòng trọ"
    },
    {
      id: 2,
      name: "A Limited",
      price: "9.500.000đ",
      statusColor: "bg-success",
      statusText: "Cho thuê",
      created: "02.11.22",
      type: "Chung cư"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDelete = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  const handleAdd = () => {
    setCurrentRoom({ name: "", price: "", statusColor: "", statusText: "", type: "" });
    setIsEditMode(false); 
    setIsModalOpen(true);
  };
  
  const handleEdit = (room) => {
    setCurrentRoom(room);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCurrentRoom(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRoom({ ...currentRoom, [name]: value });
  };

  const handleSaveOrUpdate = () => {
    if (isEditMode) {
      setRooms(
        rooms.map((room) => (room.id === currentRoom.id ? currentRoom : room))
      );
    } else {
      setRooms([...rooms, { ...currentRoom, id: rooms.length + 1 }]);
    }
    handleClose();
  };

  // Styles
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  };

  const modalContainerStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "500px",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer"
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px"
  };

  const saveButtonStyle = {
    backgroundColor: "#00BAC7",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "50px", 
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    marginLeft: "auto"
  };

  const saveButtonHoverStyle = {
    backgroundColor: "#009EA9"
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
                <h2 className="card-header-title h4 text-uppercase">
                  Danh sách phòng
                </h2>
                <input
                  className="form-control list-fuzzy-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                  type="search"
                  placeholder="Tìm kiếm phòng"
                />
                <button
                  type="button"
                  className="btn btn-primary ms-md-4"
                  onClick={handleAdd} 
                >
                  Thêm mới
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <table className="table align-middle table-hover table-nowrap mb-0">
                <thead className="thead-light">
                  <tr>
                    <th>Tên phòng</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Ngày đăng</th>
                    <th>Loại phòng</th>
                    <th className="text-end"></th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.id}>
                      <td>{room.name}</td>
                      <td>{room.price}</td>
                      <td>
                        <span className={`legend-circle ${room.statusColor}`} />
                        {room.statusText}
                      </td>
                      <td>{room.created}</td>
                      <td>{room.type}</td>
                      <td>
                        {/* Dropdown */}
                        <div className="dropdown float-end">
                          <a
                            href="javascript: void(0);"
                            className="dropdown-toggle no-arrow d-flex text-secondary"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {/* Three dots */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={14} width={14}>
                              <g>
                                <circle cx={12} cy="3.25" r="3.25" style={{ fill: "currentColor" }} />
                                <circle cx={12} cy={12} r="3.25" style={{ fill: "currentColor" }} />
                                <circle cx={12} cy="20.75" r="3.25" style={{ fill: "currentColor" }} />
                              </g>
                            </svg>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript: void(0);"
                                onClick={() => handleEdit(room)}
                              >
                                Chỉnh sửa
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-danger"
                                href="javascript: void(0);"
                                onClick={() => handleDelete(room.id)}
                              >
                                Xóa
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card-footer">
              <ul className="pagination justify-content-end list-pagination mb-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Adding/Editing */}
      {isModalOpen && (
        <div style={modalOverlayStyle} onClick={handleClose}>
          <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
            <h3>{isEditMode ? "Chỉnh sửa phòng" : "Thêm mới phòng"}</h3>
            {currentRoom && (
              <div>
                <label>Tên phòng</label>
                <input
                  type="text"
                  name="name"
                  value={currentRoom.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <label>Giá</label>
                <input
                  type="text"
                  name="price"
                  value={currentRoom.price}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <label>Trạng thái</label>
                <input
                  type="text"
                  name="statusText"
                  value={currentRoom.statusText}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <label>Ngày đăng</label>
                <input
                  type="text"
                  name="created"
                  value={currentRoom.created}
                  onChange={handleInputChange}
                  style={inputStyle}
                />

                <label>Loại phòng</label>
                <input
                  type="text"
                  name="type"
                  value={currentRoom.type}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
                
              </div>
            )}

            <button
              style={saveButtonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = saveButtonHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = saveButtonStyle.backgroundColor)}
              onClick={handleSaveOrUpdate}
            >
              {isEditMode ? "Cập nhật" : "Thêm mới"}
            </button>

            <button style={closeButtonStyle} onClick={handleClose}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
