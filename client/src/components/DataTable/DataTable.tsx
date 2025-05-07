import { ColumnDef, SortDirection } from "./ColumnDef";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import React, { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableFooter,
  TablePagination,
  TableProps,
  TableRow,
  TableRowProps,
} from "@mui/material";
import _ from "lodash";

interface IProps<T extends object> extends TableProps {
  // The data to display in the table
  data: Array<T>;
  // The definition of the columns to display
  columns: Array<ColumnDef<T>>;
  groupHeaders?: React.ReactElement<TableCellProps>[][];
  // The props to apply to each row
  rowProps?: TableRowProps | ((data: T, index: number) => TableRowProps);
  // The props to apply to the header row
  headerRowProps?: TableRowProps;
  // The props to apply to the table container
  containerProps?: TableContainerProps;
  // The footer to display at the bottom of the table
  tableFooter?: JSX.Element;
  // The default sort field
  defaultSortField?: keyof T | string;
  // The default sort direction
  defaultSortDirection?: SortDirection;
  // Callback for when the sort changes
  onSortChange?: (column: ColumnDef<T>, direction: SortDirection) => void;
  // Whether to show pagination
  pagination?: boolean;
  // The number of rows per page
  rowsPerPage?: number;
}

export const DataTable = <T extends object>(props: IProps<T>) => {
  const {
    data,
    columns,
    headerRowProps,
    rowProps,
    tableFooter,
    containerProps,
    defaultSortDirection,
    defaultSortField,
    pagination,
    rowsPerPage,
    groupHeaders,
    onSortChange,
    ...tableProps
  } = props;

  // Keep track of the sort state.
  const [sort, setSort] = useState<{
    direction?: SortDirection;
    column?: ColumnDef<T>;
  }>({
    direction: defaultSortDirection,
    column: undefined,
  });

  // Track rows per page.
  const [perPage, setPerPage] = useState(rowsPerPage ?? 50);
  const [currentPage, setCurrentPage] = useState(0);
  const [startSort, setStartSort] = useState<{
    column?: ColumnDef<T>;
    sortField?: keyof T | string;
    sortDirection?: SortDirection;
  }>({});

  // Reset the number of pages based on props.
  useEffect(() => {
    setPerPage(rowsPerPage ?? 50);
  }, [rowsPerPage]);

  // Store the default sort field and direction.  Used to prevent a reversion of the sort state if the default sort column doesn't change.
  useEffect(() => {
    const column = _.find(columns, (c) => c.field === defaultSortField || c.header === defaultSortField);

    if (
      startSort.sortDirection !== defaultSortDirection ||
      startSort.sortField !== defaultSortField ||
      startSort.column !== column
    ) {
      setStartSort({
        column: _.find(columns, (c) => c.field === defaultSortField || c.header === defaultSortField),
        sortField: defaultSortField,
        sortDirection: defaultSortDirection,
      });
    }
  }, [columns, defaultSortDirection, defaultSortField, startSort]);

  // Update the sort direction.
  useEffect(() => {
    setSort({
      column: startSort.column,
      direction: startSort.sortDirection,
    });
  }, [startSort.column, startSort.sortDirection]);

  //Update paging.
  useEffect(() => {
    const pageCount = Math.ceil(data.length / perPage) - 1;

    if (currentPage > pageCount && data.length !== 0) setCurrentPage(pageCount);
  }, [currentPage, data, pagination, perPage]);

  // Handle a click on a header cell for sorting purposes.
  const handleHeaderClick = (column: ColumnDef<T>) => {
    const direction = sort.column === column ? (sort.direction === "asc" ? "desc" : "asc") : "asc";
    setSort({
      direction,
      column,
    });

    if (onSortChange) onSortChange(column, direction);
  };

  // Sort the data based on the sort state.
  const sortedData = useMemo(() => {
    // If there is no sort column, return the data as-is.
    if (sort.column) {
      // If there is a sort iterator, use it to sort the data.
      if (sort.column.sortIterator !== undefined) {
        return _.orderBy(data, [sort.column.sortIterator], [sort.direction ?? "asc"]);
      }

      // Otherwise, sort by the field.
      return _.orderBy(data, [sort.column.field], [sort.direction ?? "asc"]) as T[];
    }

    return data;
  }, [sort, data]);

  // Apply pagination if necessary.
  const paginatedData = useMemo(() => {
    if (pagination) {
      return _.slice(sortedData, currentPage * perPage, (currentPage + 1) * perPage);
    }

    return sortedData;
  }, [pagination, sortedData, currentPage, perPage]);

  return (
    <>
      <TableContainer {...containerProps}>
        <Table {...tableProps}>
          <DataTableHeader
            className="table-header"
            columns={columns}
            groupHeaders={groupHeaders}
            onHeaderClick={handleHeaderClick}
            sortColumn={sort.column}
            sortDirection={sort.direction}
            {...headerRowProps}
          />
          <TableBody>
            {_.map(paginatedData, (row, rowIdx) => {
              let rowProp: TableRowProps = {};

              if (rowProps !== undefined) {
                if (typeof rowProps === "function") {
                  rowProp = rowProps(row, rowIdx);
                } else {
                  rowProp = rowProps;
                }
              }
              return <DataTableRow columns={columns} data={row} key={rowIdx} rowIndex={rowIdx} {...rowProp} />;
            })}
          </TableBody>
          {tableFooter !== undefined ? (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={columns.length}>{tableFooter}</TableCell>
              </TableRow>
            </TableFooter>
          ) : null}
        </Table>
      </TableContainer>
      {pagination ? (
        <TablePagination
          component="div"
          count={data.length}
          onPageChange={(_event, newPage) => setCurrentPage(newPage)}
          onRowsPerPageChange={(event) => setPerPage(parseInt(event.target.value, 10))}
          page={currentPage}
          rowsPerPage={perPage}
          rowsPerPageOptions={[10, 25, 50, 100]}
        />
      ) : null}
    </>
  );
};
