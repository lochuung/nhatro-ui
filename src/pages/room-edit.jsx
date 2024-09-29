export default function RoomEdit() {
    const status = {
        available: {
            value: "AVAILABLE",
            label: "Còn phòng"
        },
        rented: {
            value: "RENTED",
            label: "Đang cho thuê"
        },
        maintenance: {
            value: "MAINTENANCE",
            label: "Đang bảo trì"
        }
    }
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-baseline justify-content-between">
                    <h1 className="h2">Phòng trọ</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9 col-xxl-7">
                        <form className="needs-validation" noValidate="">
                            <div className="card border-0 py-6 px-md-6">
                                <div className="card-body">
                                    <h2 className="text-center mb-0">Chỉnh sửa</h2>
                                    <p className="text-secondary text-center">
                                        Chỉnh sửa và thêm mới phòng
                                    </p>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md">
                                                <label htmlFor="projectName" className="form-label">
                                                    Tên phòng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="roomName"
                                                    placeholder="Nhập tên phòng"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Vui lòng nhập tên phòng
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <label htmlFor="owner" className="form-label">
                                                    Giá phòng
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="price"
                                                    placeholder="Nhập giá phòng"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">
                                                    Vui lòng nhập giá phòng
                                                </div>
                                            </div>
                                        </div>
                                        {" "}
                                        {/* / .row */}
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md">
                                                <label htmlFor="url" className="form-label">
                                                    Sức chứa
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="capacity"
                                                        placeholder="Số lượng người ở tối đa"
                                                    />
                                                </div>
                                                <div className="invalid-feedback">
                                                    Vui lòng nhập số lượng người ở tối đa
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <label htmlFor="status" className="form-label">
                                                    Trạng thái
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="status"
                                                    required=""
                                                    autoComplete="off"
                                                    data-select='{
                                                                  "placeholder": "Chọn trạng thái"
                                                              }'
                                                    data-option-template='<span class="d-flex align-items-center py-2"><span class="text-truncate ms-2">[[text]]</span></span>'
                                                    data-item-template='<span class="d-flex align-items-center"><span class="text-truncate ms-2">[[text]]</span></span>'
                                                >
                                                    <option label="Trạng thái phòng"/>
                                                    {Object.keys(status).map((key) => {
                                                        return (
                                                            <option
                                                                value={status[key].value}>{status[key].label}</option>
                                                        )
                                                    })}
                                                </select>
                                                <div className="invalid-feedback">
                                                    Vui lòng chọn trạng thái của phòng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label className="form-label">Mô tả</label>
                                                <div
                                                    data-quill='{"placeholder" : "Chi tiết về phòng"}'
                                                    className="mb-3 h-150px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-light">
                                            Hủy
                                        </button>
                                        <a className="btn btn-primary">
                                            Xác nhận
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}