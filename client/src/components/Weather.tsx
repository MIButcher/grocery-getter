import styles from "./Weather.module.scss";
import { useAtomValue, useSetAtom } from "jotai";
import { weatherAtomLoadable, weatherAtom } from "../state/weather-state.ts";
import { useMemo } from "react";
import { DataTable } from "./DataTable/DataTable.tsx";
import { WeatherForecast } from "../generated/index.ts";
import { ColumnDef } from "./DataTable/ColumnDef.tsx";
import { Button } from "@mui/material";

export default function Weather() {
  const weatherAtomState = useAtomValue(weatherAtomLoadable);
  const refreshWeatherData = useSetAtom(weatherAtom);
  const weatherData = useMemo(() => (weatherAtomState.state === "hasData" ? weatherAtomState.data : []), [weatherAtomState]);

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
    <div>
      <Button onClick={() => refreshWeatherData()}>Refresh Weather</Button>
      <h2>Weather Data</h2>
      <DataTable
        columns={columns}
        data={weatherData}
        className={styles.dataTableFormatting}
        defaultSortField="summary"
        defaultSortDirection="asc"
      />
    </div>
  );
}
