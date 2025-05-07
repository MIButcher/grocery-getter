### Create a New Table

Import the DataTable from /components/DataTable/DataTable.tsx.  The data table extends the Material UI and allows users to interact with the underlying DataTable.   The DataTable has two required properties: `data` and `columns`.    `data` is an array of values rendered within the table, and `columns` defines the columns rendered within the DataTable.

```typescript
import styles from "./Weather.module.scss";
import { useAtomValue, useSetAtom } from "jotai";
import { weatherAtomLoadable, weatherAtom } from "../state/weather-state.ts";
import { useMemo } from "react";
import { DataTable } from "./components/DataTable/DataTable.tsx";
import { ColumnDef } from "./components/DataTable/ColumnDef.tsx";
import { WeatherForecast } from "../generated/index.ts";

export default function Weather() {

  const weatherAtomState = useAtomValue(weatherAtomLoadable);
  const refreshWeatherData = useSetAtom(weatherAtom);
  
  const weatherData = useMemo(() => (weatherAtomState.state === "hasData" ? weatherAtomState.data : []), [weatherAtomState]);

// Definition of the columns.
  const columns: ColumnDef<WeatherForecast>[] = [
    {
      header: "Summary",
      field: "summary",
      isSortable: true,
    },
    {
      header: "Farenheit",
      field: "temperatureF",
      isSortable: true,
    },
    {
      header: "Celsius",
      field: "temperatureC",
      isSortable: true,
    },
  ]; 

  return (
    <DataTable
	  columns={columns}
	  data={weatherData}
	  className={styles.dataTableFormatting}
	  defaultSortField="summary"
	  defaultSortDirection="asc"
    />
  );
}
```

### Defined Columns
ColumnDef has multiple properties to allow the developer to customize how the database renders.

| Property                                                                                                                  | Description                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| header?: string                                                                                                           | The text value to display in the head                                                                                                                                                     |
| field?: keyof T                                                                                                           | The field name from within the `data` collection to display within the cell.                                                                                                              |
| renderer?: (data: T, column: ColumnDef<T>, rowIndex: number, columnIndex: number) => JSX.Element \| string \| null        | Used to render a custom component within a cell.  The `field` property is ignored for rendering purposes.                                                                                 |
| isSortable?: boolean                                                                                                      | If the field is sortable.  The default is false.                                                                                                                                          |
| sortIterator?: SortIterator<T, TResult>                                                                                   | A function that is called for each data item.  The value returned is what DataTable used to short.  If not specified, the DataTable will use the field specified in the `field` property. |
| headerCellProps?: TableCellProps \| ((column: ColumnDef<T>, columnIndex: number) => TableCellProps);                      | Used to override the default property of the underlying header cell.  You can specify the values or return a value dynamically based on the column.                                       |
| cellProps?: TableCellProps \| ((data: T, column: ColumnDef<T>, rowIndex: number, columnIndex: number) => TableCellProps); | Used to override the default property of the underlying cell.  You can specify the values or return a values dynamically based on the column and/or the data.                             |
