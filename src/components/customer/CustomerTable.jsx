import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";
import {Button, Dropdown, Menu} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined} from "@ant-design/icons";

const CustomerTable = ({customers, onView, openForm, openDeleteConfirm, onSort, currentSort}) => {
    const columns = useMemo(() => [
        {Header: "Khách hàng", accessor: "name"},
        {Header: "Số điện thoại", accessor: "phone"},
        {Header: "Ngày sinh", accessor: "birthday"},
        {
            Header: "Thao tác",
            accessor: "id",
            disableSortBy: true,
            Cell: ({row}) => {
                const menu = (
                    <Menu>
                        <Menu.Item
                            key="0"
                            icon={<EyeOutlined style={{color: '#1890ff'}}/>}
                            onClick={() => onView(row.original)}
                        >
                            Xem chi tiết
                        </Menu.Item>
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
    ], []);

    const data = useMemo(() => customers, [customers]);

    return (
        <SortableTable
            columns={columns}
            data={data}
            onSort={onSort}
            currentSort={currentSort}
        />
    );
};

export default CustomerTable;
