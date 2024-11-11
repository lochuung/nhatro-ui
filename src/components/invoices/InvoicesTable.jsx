import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";
import {Dropdown, Menu, Button} from 'antd';
import {DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined, PrinterOutlined} from '@ant-design/icons';
import {FcPrint} from "react-icons/fc";
import {AiOutlinePrinter} from "react-icons/ai";

const InvoicesTable = ({
                           invoices,
                           isLoading,
                           onView,
                           onPrint,
                           openForm,
                           openDeleteConfirm,
                           onDelete,
                           onSort,
                           currentSort
                       }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Tên phòng',
                accessor: 'contract.room.name',
            },
            {
                Header: 'Mã phòng',
                accessor: 'contract.room.code',
            },
            {
                Header: 'Ngày bắt đầu',
                accessor: 'startDate',
                Cell: ({value}) => new Date(value).toLocaleDateString("vi-VN"),
            },
            {
                Header: 'Ngày hết hạn',
                accessor: 'endDate',
                Cell: ({value}) => new Date(value).toLocaleDateString("vi-VN"),
            },
            {
                Header: 'Tổng tiền',
                accessor: 'totalAmount',
                Cell: ({value}) =>
                    new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(value),
            },
            {
                Header: 'Loại hóa đơn',
                accessor: 'type',
                Cell: ({value}) => (value === "MONTHLY" ? "Hàng tháng" : "Khác"),
            },
            {
                Header: 'Trạng thái thanh toán',
                accessor: 'paidAmount',
                Cell: ({row}) =>
                    row.original.paidAmount >= row.original.totalAmount ? "Đã thanh toán" : "Chưa thanh toán",
            },
            {
                Header: 'Thao tác',
                accessor: 'id',
                disableSortBy: true,
                Cell: ({row}) => {
                    const menu = (
                        <Menu>
                            <Menu.Item
                                key="view-1"
                                icon={<EyeOutlined/>}
                                onClick={() => onView(row.original)}
                            >
                                Xem
                            </Menu.Item>
                            <Menu.Item
                                key="print-1"
                                icon={<AiOutlinePrinter/>}
                                onClick={() => onPrint(row.original.id)}
                            >
                                In
                            </Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item
                                key="1"
                                icon={<EditOutlined style={{color: '#1890ff'}}/>}
                                onClick={() => openForm(row.original)}
                            >
                                Chỉnh sửa
                            </Menu.Item>
                            <Menu.Item
                                key="2"
                                icon={<DeleteOutlined style={{color: '#ff4d4f'}}/>}
                                onClick={() => openDeleteConfirm(row.original.id)}
                            >
                                Xóa
                            </Menu.Item>
                        </Menu>
                    );

                    return (
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                            <Button
                                type="text"
                                icon={<MoreOutlined style={{fontSize: '16px'}}/>}
                                size="small"
                            />
                        </Dropdown>
                    );
                },
            },
        ],
        [openForm, openDeleteConfirm]
    );

    const data = useMemo(() => invoices, [invoices]);

    return (
        <SortableTable
            columns={columns}
            data={data}
            loading={isLoading}
            onSort={onSort}
            currentSort={currentSort}
        />
    );
};

export default InvoicesTable;
