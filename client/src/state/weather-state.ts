import { WeatherForecastApi } from "../generated";
import { apiProvider } from "../utilities/api_provider";
import { atomWithRefresh, loadable } from "jotai/utils";

export const weatherAtom = atomWithRefresh(async () => {
  const weatherApi = apiProvider(WeatherForecastApi);
  return await weatherApi.getWeatherForecast();
});

export const weatherAtomLoadable = loadable(weatherAtom);
