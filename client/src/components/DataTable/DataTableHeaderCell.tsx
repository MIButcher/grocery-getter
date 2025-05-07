import { ColumnDef } from "./ColumnDef";
import { TableCell, TableCellProps } from "@mui/material";

interface IProps<T extends object> {
  // The column definition for the header cell
  column: ColumnDef<T>;
  // The column index
  columnIndex: number;
}

// The DataTableHeaderCell component renders a single header cell in a data table.
export const DataTableHeaderCell = <T extends object>(props: IProps<T>) => {
  const { column, columnIndex } = props;

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

  return <TableCell {...cellProps}>{column.header}</TableCell>;
};
