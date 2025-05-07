import { ColumnDef } from "./ColumnDef";
import _ from "lodash";
import { TableCell, TableCellProps } from "@mui/material";

interface IProps<T extends object> {
  // The data for the row
  data: T;
  // The column definition for the cell
  column: ColumnDef<T>;
  // The row index
  rowIndex: number;
  // The column index
  columnIndex: number;
}

// The DataTableCell component renders a single cell in a data table.
export const DataTableCell = <T extends object>(props: IProps<T>) => {
  const { data, column, rowIndex, columnIndex } = props;

  // The output value of the cell
  let outputValue: string | JSX.Element | null;

  // If the column has a renderer, use it to render the cell value.
  if (column.renderer !== undefined) {
    outputValue = column.renderer(data, column, rowIndex, columnIndex);
  } else {
    // Otherwise, just render the value of the field.
    outputValue = column.field !== undefined && data[column.field] !== undefined ? _.toString(data[column.field]) : null;
  }

  // If the cell has cell props, apply them.
  let cellProps: TableCellProps = {};

  if (column.cellProps !== undefined) {
    // If the cell props are a function, call it to get the props.
    if (typeof column.cellProps === "function") {
      cellProps = column.cellProps(data, column, rowIndex, columnIndex);
    } else {
      cellProps = column.cellProps;
    }
  }

  return <TableCell {...cellProps}>{outputValue}</TableCell>;
};
