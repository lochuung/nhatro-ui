import React, { useMemo } from 'react';
import { Spin } from 'antd';
import { useSortBy, useTable } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';

const RoomTable = ({ rooms, loading, openRoomForm, openDeleteConfirm }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Tên phòng',
                accessor: 'name', // column id
            },
            {
                Header: 'Giá',
                accessor: 'price',
                Cell: ({ value }) =>
                    new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(value),
            },
            {
                Header: 'Trạng thái',
                accessor: 'status',
                Cell: ({ value }) => (
                    <>
                        <span className={`legend-circle ${value === 'RENTED' ? 'bg-danger' : 'bg-success'}`} />
                        {value === 'RENTED' ? 'Đã cho thuê' : 'Trống'}
                    </>
                ),
            },
            {
                Header: 'Số người',
                accessor: (row) => row.contracts.find((contract) => contract.status === 'OPENING')?.numberOfPeople || '0',
            },
            {
                Header: 'Thao tác',
                accessor: 'id',
                disableSortBy: true, // Disable sorting for action buttons
                Cell: ({ row }) => (
                    <>
                        <button className="btn btn-sm btn-secondary" onClick={() => openRoomForm(row.original)}>
                            Chỉnh sửa
                        </button>
                        <button className="btn btn-sm btn-danger ms-2" onClick={() => openDeleteConfirm(row.original.id)}>
                            Xóa
                        </button>
                    </>
                ),
            },
        ],
        [openRoomForm, openDeleteConfirm]
    );

    const data = useMemo(() => rooms, [rooms]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

    return (
        <div className="table-responsive">
            {loading ? (
                <div className="text-center">
                    <Spin size="large" />
                </div>
            ) : rooms.length === 0 ? (
                <div className="text-center my-4">
                    <h3>Không tìm thấy phòng nào</h3>
                </div>
            ) : (
                <table className="table align-middle table-hover table-nowrap mb-0" {...getTableProps()}>
                    <thead className="thead-light">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={column.isSorted ? (column.isSortedDesc ? 'sort-desc' : 'sort-asc') : ''}
                                >
                                    {column.render('Header')}
                                    <span className="ms-2">
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FontAwesomeIcon icon={faSortDown} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faSortUp} />
                                                )
                                            ) : (
                                                <FontAwesomeIcon icon={faSort} />
                                            )}
                                        </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="list">
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default RoomTable;
