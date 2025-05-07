import { ColumnDef, SortDirection } from "./ColumnDef";
import { Box, TableCell, TableCellProps, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

interface IProps<T extends object> {
  // The column definition for the header cell
  column: ColumnDef<T>;
  // The sort direction
  sortDirection?: SortDirection;
  // The column the data is sorted by
  sortColumn?: ColumnDef<T>;
  // The click handler for the header cells
  onHeaderClick: (column: ColumnDef<T>) => void;
  // The column index
  columnIndex: number;
}

// The DataTableSortableHeaderCell component renders a single sortable header cell in a data table.
export const DataTableSortableHeaderCell = <T extends object>(props: IProps<T>) => {
  const { column, onHeaderClick, sortDirection, sortColumn, columnIndex } = props;

  let cellProps: TableCellProps = {};

  // If the cell has cell props, apply them.
  if (column.headerCellProps !== undefined) {
    // If the cell props are a function, call it to get the props.
    if (typeof column.headerCellProps === "function") {
      cellProps = column.headerCellProps(column, columnIndex);
    } else {
      // Otherwise, just use the props as-is.
      cellProps = column.headerCellProps;
    }
  }

  return (
    <TableCell {...cellProps} sortDirection={column === sortColumn ? sortDirection : false}>
      <TableSortLabel
        active={column === sortColumn}
        direction={column === sortColumn ? sortDirection : "asc"}
        onClick={() => onHeaderClick(column)}
      >
        {column.header}
        {column === sortColumn ? (
          <Box component="span" style={visuallyHidden}>
            {sortDirection === "desc" ? "sorted descending" : "sorted ascending"}
          </Box>
        ) : null}
      </TableSortLabel>
    </TableCell>
  );
};
