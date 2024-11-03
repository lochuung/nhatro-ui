import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";

const ServiceTable = ({services, loading, openServiceFeeForm, openDeleteConfirm, onSort, currentSort}) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Tên dịch vụ',
                accessor: 'name', // column id
            },
            {
                Header: 'Mã dịch vụ',
                accessor: 'code',
            },
            {
                Header: 'Giá',
                accessor: 'unitPrice',
                Cell: ({value}) =>
                    new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(value),
            },
            {
                Header: 'Thao tác',
                accessor: 'id',
                disableSortBy: true, // Disable sorting for action buttons
                Cell: ({row}) => (
                    <>
                        <button className="btn btn-sm btn-secondary" onClick={() => openServiceFeeForm(row.original)}>
                            Chỉnh sửa
                        </button>
                        <button className="btn btn-sm btn-danger ms-2"
                                onClick={() => openDeleteConfirm(row.original.id)}>
                            Xóa
                        </button>
                    </>
                ),
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