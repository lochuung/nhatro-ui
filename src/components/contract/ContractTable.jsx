import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";
import {Button, Dropdown, Menu} from "antd";
import {DeleteOutlined, EditOutlined, FileTextOutlined, MoreOutlined} from "@ant-design/icons";

const ContractTable = ({datas, openForm, onInvoicesView, onPrint, openDelete, onSort, currentSort}) => {
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
                    <span className={`legend-circle ${value === "RENTED" ? "bg-danger" : "bg-success"}`}/>
                    {value === "OPENING" ? "Đang mở" : "Đã đống"}
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
                        <Menu.Divider />
                        <Menu.Item
                            key={"print" + row.original.id}
                            icon={<FileTextOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => onPrint(row.original.id)}
                        >
                            In hợp đồng
                        </Menu.Item>
                        <Menu.Item
                            key={"edit" + row.original.id}
                            icon={<EditOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => openForm(row.original)}
                        >
                            Chỉnh sửa
                        </Menu.Item>
                        <Menu.Item
                            key={"delete" + row.original.id}
                            icon={<DeleteOutlined style={{color: '#ff4d4f'}}/>}
                            onClick={() => openDelete(row.original.id)}
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
