import React, {useMemo, useState} from "react";
import SortableTable from "../SortableTable.jsx";
import {Button, Dropdown, Menu} from "antd";
import {DeleteOutlined, EyeOutlined, FileTextOutlined, LogoutOutlined, MoreOutlined} from "@ant-design/icons";
import {MdDownload, MdOutlineRememberMe} from "react-icons/md";

const ContractTable = ({
                           datas,
                           onInvoicesView,
                           onCheckout,
                           onView,
                           onEditMembers,
                           onPrint,
                           openDelete,
                           onSort,
                           currentSort
                       }) => {
    const [printingId, setPrintingId] = useState(null);

    const handlePrint = async (id) => {
        setPrintingId(id);
        try {
            await onPrint(id);
        } finally {
            setPrintingId(null);
        }
    };

    const columns = useMemo(() => [
        {Header: "Tên phòng", accessor: "room.name"},
        {Header: "Mã phòng", accessor: "room.code"},
        {
            Header: "Giá",
            accessor: "price",
            Cell: ({value}) => new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"}).format(value),
        },
        {
            Header: "Chủ phòng",
            accessor: "owner.name",
            Cell: ({value}) => value || "Chưa có",
        },
        {
            Header: "Trạng thái",
            accessor: "status",
            Cell: ({value}) => (
                <>
                    <span className={`legend-circle ${value !== 'OPENING' ? "bg-danger" : "bg-success"}`}/>
                    {value === "OPENING" ? "Đang mở" : "Đã đóng"}
                </>
            ),
        },
        {Header: "Số người", accessor: "numberOfPeople", disableSortBy: true},
        {
            Header: "Thao tác",
            accessor: "id",
            disableSortBy: true,
            Cell: ({row}) => {
                const menu = (
                    <Menu>
                        <Menu.Item
                            key={"invoice" + row.original.id}
                            icon={<FileTextOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => onInvoicesView(row.original.id)}
                        >
                            Xem hóa đơn
                        </Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item
                            key={"view" + row.original.id}
                            icon={<EyeOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => onView(row.original)}
                        >
                            Xem hợp đồng
                        </Menu.Item>
                        <Menu.Item
                            key={"print" + row.original.id}
                            icon={<MdDownload style={{color: '#1890ff'}}/>}
                            onClick={() => handlePrint(row.original.id)}
                            disabled={printingId === row.original.id}
                        >
                            {printingId === row.original.id ? 'Đang tải...' : 'Tải hợp đồng'}
                        </Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item
                            key={"checkout" + row.original.id}
                            icon={<LogoutOutlined style={{color: '#d42e00'}}/>}
                            onClick={() => onCheckout(row.original)}
                        >
                            Trả phòng
                        </Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item
                            key={"edit" + row.original.id}
                            icon={<MdOutlineRememberMe  style={{color: '#1890ff'}}/>}
                            onClick={() => onEditMembers(row.original)}
                        >
                            Chỉnh sửa thành viên
                        </Menu.Item>
                        {/* <Menu.Item
                            key={"delete" + row.original.id}
                            icon={<DeleteOutlined style={{color: '#ff4d4f'}}/>}
                            onClick={() => {
                                openDelete(row.original.id)
                            }}
                        >
                            Xóa
                        </Menu.Item> */}
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
    ], []);

    const data = useMemo(() => datas, [datas]);

    return (
        <SortableTable
            columns={columns}
            data={data}
            onSort={onSort}
            currentSort={currentSort}
        />
    );
};

export default ContractTable;
