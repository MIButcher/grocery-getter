import { DataTableCell } from "./DataTableCell";
import { ColumnDef } from "./ColumnDef";
import { TableRow, TableRowProps } from "@mui/material";
import _ from "lodash";

interface IProps<T extends object> extends TableRowProps {
  // The definition of the columns to display
  columns: Array<ColumnDef<T>>;
  // The data for the row
  data: T;
  // The row index
  rowIndex: number;
}

export const DataTableRow = <T extends object>(props: IProps<T>) => {
  const { columns, data, rowIndex, ...rowProps } = props;

  return (
    <TableRow {...rowProps}>
      {_.map(columns, (column, cidx) => (
        <DataTableCell column={column} columnIndex={cidx} data={data} key={cidx} rowIndex={rowIndex} />
      ))}
    </TableRow>
  );
};
