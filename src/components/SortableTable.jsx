import React from "react";
import {useSortBy, useTable} from "react-table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSort, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

const SortableTable = ({columns, data, onSort, currentSort, renderActions}) => {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(
        {columns, data},
        useSortBy
    );

    return (
        <table className="table align-middle table-hover table-nowrap mb-0" {...getTableProps()}>
            <thead className="thead-light">
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => {
                        const isCurrentSortColumn = currentSort?.column === column.id;
                        const isSortedAsc = isCurrentSortColumn && currentSort?.direction === "ASC";
                        const isSortedDesc = isCurrentSortColumn && currentSort?.direction === "DESC";

                        return (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps({
                                        onClick: () => {
                                            if (column.disableSortBy) return;
                                            const direction = !isCurrentSortColumn ? "ASC" : isSortedAsc ? "DESC" : null;
                                            onSort(direction ? {column: column.id, direction} : null);
                                        }
                                    })
                                )}
                                className={isCurrentSortColumn ? (isSortedDesc ? "sort-desc" : "sort-asc") : ""}
                            >
                                {column.render("Header")}
                                {!column.disableSortBy && (
                                    <span className="ms-2">
                                            {isCurrentSortColumn ? (
                                                isSortedDesc ? <FontAwesomeIcon icon={faSortDown}/> :
                                                    <FontAwesomeIcon icon={faSortUp}/>
                                            ) : (
                                                <FontAwesomeIcon icon={faSort}/>
                                            )}
                                        </span>
                                )}
                            </th>
                        );
                    })}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()} className="list">
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default SortableTable;
