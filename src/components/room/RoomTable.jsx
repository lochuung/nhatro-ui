import React, {useMemo} from "react";
import SortableTable from "../SortableTable.jsx";

const RoomTable = ({ rooms, openRoomForm, openDeleteConfirm, onSort, currentSort }) => {
    const columns = useMemo(() => [
        { Header: "Tên phòng", accessor: "name" },
        { Header: "Mã phòng", accessor: "code" },
        {
            Header: "Giá",
            accessor: "price",
            Cell: ({ value }) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value),
        },
        {
            Header: "Trạng thái",
            accessor: "status",
            Cell: ({ value }) => (
                <>
                    <span className={`legend-circle ${value === "RENTED" ? "bg-danger" : "bg-success"}`} />
                    {value === "RENTED" ? "Đã cho thuê" : "Trống"}
                </>
            ),
        },
        { Header: "Số người", accessor: "numberOfPeople", disableSortBy: true },
        {
            Header: "Thao tác",
            accessor: "id",
            disableSortBy: true,
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
