import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";
import {Button, Dropdown, Menu} from "antd";
import {DeleteOutlined, EditOutlined, FileTextOutlined, MoreOutlined} from "@ant-design/icons";
import {IoContractOutline} from "react-icons/io5";

const RoomTable = ({rooms, openRoomForm, onContractsView, onCheckin, openDeleteConfirm, onSort, currentSort}) => {
    const columns = useMemo(() => [
        {Header: "Tên phòng", accessor: "name"},
        {Header: "Mã phòng", accessor: "code"},
        {
            Header: "Giá",
            accessor: "price",
            Cell: ({value}) => new Intl.NumberFormat("vi-VN", {style: "currency", currency: "VND"}).format(value),
        },
        {
            Header: "Trạng thái",
            accessor: "status",
            Cell: ({value}) => (
                <>
                    <span className={`legend-circle ${value === "RENTED" ? "bg-danger" : "bg-success"}`}/>
                    {value === "RENTED" ? "Đã cho thuê" : "Trống"}
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
                            key={"contract" + row.original.id}
                            icon={<FileTextOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => onContractsView(row.original.code)}
                            >
                            Xem hợp đồng
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                            key={"checkin" + row.original.id}
                            icon={<IoContractOutline style={{color: '#d90d65'}}/>}
                            onClick={() => onCheckin(row.original)}
                        >
                            Cho thuê
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item
                            key="1"
                            icon={<EditOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => openRoomForm(row.original)}
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
    ], []);

    const data = useMemo(() => rooms, [rooms]);

    return (
        <SortableTable
            columns={columns}
            data={data}
            onSort={onSort}
            currentSort={currentSort}
        />
    );
};

export default RoomTable;
