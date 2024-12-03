import React, {useEffect, useState} from "react";
import PageHeader from "../components/PageHeader.jsx";
import TableControls from "../components/TableControls.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";
import DeleteModal from "../components/DeleteModal.jsx";
import {useQueryClient} from "@tanstack/react-query";
import useTableFilters from "../hooks/useTableFilters.js";
import useModal from "../hooks/useModal.js";
import useSaveOrUpdateMutation from "../hooks/useSaveOrUpdateMutation.js";
import RoomServices from "../services/RoomServices.js";
import useDeleteMutation from "../hooks/useDeleteMutation.js";
import useInvoicesQuery from "../hooks/useInvoicesQuery.js";
import InvoiceServices from "../services/InvoiceServices.js";
import {DatePicker, Select, Spin} from "antd";
import InvoicesTable from "../components/invoices/InvoicesTable.jsx";
import InvoiceForm from "../components/invoices/InvoiceForm.jsx";
import {useLocation} from "react-router";
import ModalViewInvoice from "../components/invoices/ModalViewInvoice.jsx";
import dayjs from '../utils/locale-custom.js'
import { downloadFileWithAuth } from '../utils/printUtils';

const Invoice = (props) => {
    // const [showModalAddInvoice, setShowModalAddInvoice] = useState(false);
    // const [currentContract, setCurrentContract] = useState(null);
    // const [showModalViewInvoice, setShowModalViewInvoice] = useState(false);
    // const [showModalDeleteInvoice, setShowModalDeleteInvoice] = useState(false);
    // const [showModalUpdateInvoice, setShowModalUpdateInvoice] = useState(false);
    // const [dataUpdate, setDataUpdate] = useState({});
    //
    // const handleDelete = (invoice) => {
    //     setShowModalDeleteInvoice(true);
    //     setCurrentContract(invoice);
    // };
    //
    // const handleAdd = () => {
    //     setDataUpdate({
    //         roomName: "",
    //         contractName: "",
    //         oldElecNum: '',
    //         newElecNum: '',
    //         oldWaNum: '',
    //         newWaNum: '',
    //         type: ""
    //     });
    //     setShowModalAddInvoice(true);
    //
    // };
    //
    // const handleEdit = (invoice) => {
    //     setDataUpdate(invoice);
    //     setShowModalUpdateInvoice(true);
    // };
    //
    // const handleView = (invoice) => {
    //     setCurrentContract(invoice);
    //     setShowModalViewInvoice(true);
    // }

    const queryClient = useQueryClient();
    const {filters, setFilters, handlePageChange, handleSearch, handleSort, handleFilterChange} = useTableFilters({
        page: 0,
        size: 6,
        status: null,
        search: '',
        sort: null,
        room: '',
        month: dayjs().format("MM/YYYY"),
        paymentStatus: '',
        contractId: '',
        type: '',
    });

    const location = useLocation();

    useEffect(() => {
        const contractId = new URLSearchParams(location.search).get('contractId');
        if (contractId) {
            setFilters({...filters, contractId});
        }
    }, [location.search]);

    // Destructure filters and pass them to the query
    const {page, size, room, month, paymentStatus, contractId, type, search, sort} = filters;

    const {data, isLoading} =
        useInvoicesQuery({
            page, size, room, type,
            month, paymentStatus, search, sort,
            contractId
        });
    const invoices = data?.invoices || [];
    const pagination = data?.pagination || {totalPages: 1, currentPage: 0, pageSize: 10};
    const deleteModal = useModal();
    const formModal = useModal();
    const viewModal = useModal();

    const saveOrUpdateMutation = useSaveOrUpdateMutation(queryClient, formModal, InvoiceServices.saveOrUpdateInvoice);
    const deleteMutation = useDeleteMutation(queryClient, deleteModal, InvoiceServices.deleteInvoice, filters, setFilters, invoices);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch rooms data when component mounts
        RoomServices.getAllRooms().then((res) => {
            setRooms(res.data);
        }).catch(error => {
            console.error("Error fetching rooms:", error);
        });
    }, []);

    const onPrint = (id) => {
        const url = InvoiceServices.getPrintUrl(id);
        downloadFileWithAuth(url, `invoice-${id}.pdf`);
    };

    const handlePaymentUpdate = () => {
        // Refetch the invoices data
        queryClient.invalidateQueries(['invoices', filters]);
    };

    return (
        <div className="container-fluid">
            <PageHeader
                title="Danh sách hóa đơn"
            />

            <div className="row">
                <div className="col d-flex">
                    <div className="card border-0 flex-fill w-100" id="keysTable">
                        <TableControls
                            title="Hóa đơn"
                            // onSearch={handleSearch}
                            onAdd={() => formModal.openModal()}
                        >
                            {/* Room Filter */}
                            <Select
                                className="mw-md-200px ms-md-auto mt-3 mt-md-0 mb-3 mb-md-0"
                                placeholder="Chọn phòng"
                                value={room || ""}
                                onChange={(value) => handleFilterChange({fieldName: 'room', newValue: value})}
                                allowClear
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                <Select.Option value="">Tất cả phòng</Select.Option>
                                {rooms.map((room) => (
                                    <Select.Option key={room.id} value={room.id}>
                                        {`${room.name} (${room.code})`}
                                    </Select.Option>
                                ))}
                            </Select>

                            {/* Month Filter */}
                            <DatePicker
                                picker="month"
                                placeholder="Chọn tháng"
                                className="mw-md-200px ms-2 mt-3 mt-md-0 mb-3 mb-md-0"
                                value={month ? dayjs(month, "MM/YYYY") : null}
                                onChange={(date) =>
                                    handleFilterChange({
                                        fieldName: 'month',
                                        newValue: date ? date.format("MM/YYYY") : null,
                                    })
                                }
                                format="MM/YYYY"
                            />

                            {/* Payment Status Filter */}
                            <Select
                                className="mw-md-200px ms-2 mt-3 mt-md-0 mb-3 mb-md-0"
                                placeholder="Trạng thái thanh toán"
                                value={paymentStatus || ""}
                                onChange={(value) => handleFilterChange({fieldName: 'paymentStatus', newValue: value})}
                                allowClear
                            >
                                <Select.Option value="">Tất cả trạng thái</Select.Option>
                                <Select.Option value="paid">Đã thanh toán</Select.Option>
                                <Select.Option value="unpaid">Chưa thanh toán</Select.Option>
                            </Select>

                            {/* Type Filter */}
                            <Select
                                className="mw-md-200px ms-2 mt-3 mt-md-0 mb-3 mb-md-0"
                                placeholder="Loại hóa đơn"
                                value={type || ""}
                                onChange={(value) => handleFilterChange({fieldName: 'type', newValue: value})}
                                allowClear
                            >
                                <Select.Option value="">Tất cả loại</Select.Option>
                                <Select.Option value="CHECK_OUT">CHECK_OUT</Select.Option>
                                <Select.Option value="MONTHLY">MONTHLY</Select.Option>
                            </Select>
                        </TableControls>

                        {/* Table */}
                        <div className="table-responsive">
                            {isLoading ? (
                                <div className="text-center">
                                    <Spin size="large"/>
                                </div>
                            ) : invoices.length === 0 ? (
                                <div className="text-center my-4">
                                    <span>Không có hóa đơn</span>
                                </div>
                            ) : (
                                <InvoicesTable
                                    invoices={invoices}
                                    openForm={formModal.openModal}
                                    openDeleteConfirm={deleteModal.openModal}
                                    onPrint={onPrint}
                                    onView={viewModal.openModal}
                                    onSort={handleSort}
                                    currentSort={sort}
                                    onUpdate={handlePaymentUpdate}
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
            <DeleteModal
                visible={deleteModal.isOpen}
                onConfirm={() => deleteMutation.mutate(deleteModal.selectedData)}
                onCancel={deleteModal.closeModal}
            />

            <InvoiceForm
                visible={formModal.isOpen}
                isEditMode={formModal.isEditMode}
                currentInvoice={formModal.selectedData}
                onSubmit={(values) => saveOrUpdateMutation.mutate(values)}
                onCancel={formModal.closeModal}
            />

            <ModalViewInvoice
                visible={viewModal.isOpen}
                onCancel={viewModal.closeModal}
                invoice={viewModal.selectedData}
            />
        </div>
    );
}
export default Invoice;