import { TableCellProps } from "@mui/material";

export type SortIterator<T extends object, TResult = unknown> = (data: T, index: number) => TResult;

// The IColumnDef interface defines the properties of a column in a data table.
export interface ColumnDef<T extends object, TResult = unknown> {
  // The header text for the column
  header?: string;
  // The field name for the column
  field?: keyof T;
  // The renderer for the column
  renderer?: (data: T, column: ColumnDef<T>, rowIndex: number, columnIndex: number) => JSX.Element | string | null;
  // Whether the column is sortable
  isSortable?: boolean;
  // The sort iterator for the column
  sortIterator?: SortIterator<T, TResult>;
  // The props to apply to the header cell
  headerCellProps?: TableCellProps | ((column: ColumnDef<T>, columnIndex: number) => TableCellProps);
  // The props to apply to the cell
  cellProps?: TableCellProps | ((data: T, column: ColumnDef<T>, rowIndex: number, columnIndex: number) => TableCellProps);
}

// The SortDirection type defines the direction of a sort.
export type SortDirection = "asc" | "desc";

// The SortableColumn type defines a column that can be sorted.
export type SortableColumn<T extends object, TResult = unknown> = keyof T | SortIterator<T, TResult>;
