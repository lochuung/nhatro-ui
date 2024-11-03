import { useState } from "react";
import ModalViewInvoice from "./ModalViewInvoice";
import ModalDeleteInvoce from "./ModalDeleteInvoice";
import ModalUpdateInvoice from "./ModalUpdateInvoice";
import ModalAddInvoice from "./ModalAddInvoice";

const Invoice = (props) => {
    const [invoices, setInvoices] = useState([
        {
            id: 1,
            roomName: "Phòng 101",
            contractName: "A",
            oldElecNum: 10,
            newElecNum: 20,
            oldWaNum: 1,
            newWaNum: 2,
            dueDate: "01.02.22",
            type: "Phòng trọ"
        },
        {
            id: 2,
            roomName: "Phòng 102",
            contractName: "B",
            oldElecNum: 10,
            newElecNum: 20,
            oldWaNum: 1,
            newWaNum: 2,
            dueDate: "02.11.22",
            type: "Chung cư"
        },
        {
            id: 3,
            roomName: "Phòng 103",
            contractName: "C",
            oldElecNum: 1,
            newElecNum: 2,
            oldWaNum: 10,
            newWaNum: 30,
            dueDate: "02.11.22",
            type: "Phòng trọ"
        }
    ]);

    const [showModalAddInvoice, setShowModalAddInvoice] = useState(false);
    const [currentContract, setCurrentContract] = useState(null);
    const [showModalViewInvoice, setShowModalViewInvoice] = useState(false);
    const [showModalDeleteInvoice, setShowModalDeleteInvoice] = useState(false);
    const [showModalUpdateInvoice, setShowModalUpdateInvoice] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const handleDelete = (invoice) => {
        setShowModalDeleteInvoice(true);
        setCurrentContract(invoice);
    };

    const handleAdd = () => {
        setDataUpdate({ roomName: "", contractName: "", oldElecNum: '', newElecNum: '', oldWaNum: '', newWaNum: '', type: "" });
        setShowModalAddInvoice(true);

    };

    const handleEdit = (invoice) => {
        setDataUpdate(invoice);
        setShowModalUpdateInvoice(true);
    };

    const handleView = (invoice) => {
        setCurrentContract(invoice);
        setShowModalViewInvoice(true);
    }

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-baseline justify-content-between">
                <h1 className="h2">Hoá đơn</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Hoá đơn
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
                                    Danh sách hoá đơn
                                </h2>
                                <input
                                    className="form-control list-fuzzy-search mw-md-300px ms-md-auto mt-5 mt-md-0 mb-3 mb-md-0"
                                    type="search"
                                    placeholder="Tìm kiếm hóa đơn"
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
                                        <th>Tên hợp đồng</th>
                                        <th>Ngày hết hạn</th>
                                        <th>Loại phòng</th>
                                        <th className="text-end"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((invoice) => (
                                        <tr key={invoice.id}>
                                            <td>{invoice.roomName}</td>
                                            <td>{invoice.contractName}</td>
                                            <td>{invoice.dueDate}</td>
                                            <td>{invoice.type}</td>
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
                                                                onClick={() => handleEdit(invoice)}
                                                            >
                                                                Chỉnh sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="javascript: void(0);"
                                                                onClick={() => handleView(invoice)}
                                                            >
                                                                Xem chi tiết
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item text-danger"
                                                                href="javascript: void(0);"
                                                                onClick={() => handleDelete(invoice)}
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
            <ModalViewInvoice
                show={showModalViewInvoice}
                setShow={setShowModalViewInvoice}
                currentContract={currentContract}
            />
            <ModalDeleteInvoce
                show={showModalDeleteInvoice}
                setShow={setShowModalDeleteInvoice}
                currentContract={currentContract}
                invoices={invoices}
                setInvoices={setInvoices}
            />
            <ModalUpdateInvoice
                show={showModalUpdateInvoice}
                setShow={setShowModalUpdateInvoice}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                invoices={invoices}
                setInvoices={setInvoices}
            />
            <ModalAddInvoice
                show={showModalAddInvoice}
                setShow={setShowModalAddInvoice}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                invoices={invoices}
                setInvoices={setInvoices}
            />
        </div>

    );
}
export default Invoice;