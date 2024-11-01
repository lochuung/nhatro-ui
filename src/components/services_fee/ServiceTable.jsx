import {useMemo} from "react";
import {useSortBy, useTable} from "react-table";

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

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data}, useSortBy);

    return (
        <table {...getTableProps()} className="table table-bordered table-striped table-hover">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            className={column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : ''}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ServiceTable;