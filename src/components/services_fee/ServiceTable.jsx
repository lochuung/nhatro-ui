import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";
import {Button, Dropdown, Menu} from 'antd';
import {DeleteOutlined, EditOutlined, MoreOutlined} from '@ant-design/icons';

const ServiceTable = ({services, loading, openServiceFeeForm, openDeleteConfirm, onSort, currentSort}) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Tên dịch vụ',
                accessor: 'name', // column id
                sortable: true
            },
            {
                Header: 'Mã dịch vụ',
                accessor: 'code',
                sortable: true
            },
            {
                Header: 'Giá',
                accessor: 'unitPrice',
                sortable: true,
                Cell: ({value}) =>
                    new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(value),
            },
            {
                Header: 'Thao tác',
                accessor: 'id',
                disableSortBy: true,
                Cell: ({row}) => {
                    const menu = (
                        <Menu>
                            <Menu.Item key="edit" icon={<EditOutlined/>}
                                       onClick={() => openServiceFeeForm(row.original)}>
                                Chỉnh sửa
                            </Menu.Item>
                            <Menu.Item key="delete" icon={<DeleteOutlined/>}
                                       onClick={() => openDeleteConfirm(row.original.id)} danger>
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
                }
            },
        ],
        [openServiceFeeForm, openDeleteConfirm]
    );

    const data = useMemo(() => services, [services]);

    return (
        <SortableTable
            columns={columns}
            data={data}
            onSort={onSort}
            currentSort={currentSort}
        />
    );
}

export default ServiceTable;