import { ColumnDef, SortDirection } from "./ColumnDef";
import { DataTableHeaderCell } from "./DataTableHeaderCell";
import { DataTableSortableHeaderCell } from "./DataTableSortableHeaderCell";
import { TableCellProps, TableHead, TableRow, TableRowProps } from "@mui/material";
import _ from "lodash";

interface IProps<T extends object> extends TableRowProps {
  // The definition of the columns to display
  columns: Array<ColumnDef<T>>;
  // The sort direction
  sortDirection?: SortDirection;
  // The column the data is sorted by
  sortColumn?: ColumnDef<T>;
  // The click handler for the header cells
  onHeaderClick: (column: ColumnDef<T>) => void;
  groupHeaders?: React.ReactElement<TableCellProps>[][];
}

// The header row for the data table.
export const DataTableHeader = <T extends object>(props: IProps<T>) => {
  const { columns, onHeaderClick, sortColumn, sortDirection, groupHeaders, ...tableHeaderProps } = props;

  return (
    <TableHead>
      {_.map(groupHeaders, (groupHeader, index) => (
        <TableRow key={index} {...tableHeaderProps}>
          {groupHeader}
        </TableRow>
      ))}
      <TableRow {...tableHeaderProps}>
        {_.map(columns, (column, index) =>
          column.isSortable ?? false ? (
            <DataTableSortableHeaderCell
              column={column}
              columnIndex={index}
              key={index}
              onHeaderClick={onHeaderClick}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
            />
          ) : (
            <DataTableHeaderCell column={column} columnIndex={index} key={index} />
          ),
        )}
      </TableRow>
    </TableHead>
  );
};
