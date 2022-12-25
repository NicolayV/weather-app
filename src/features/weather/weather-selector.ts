import { RootState } from "store";

export const selectCityStatus = (state: RootState) => state.weather.status;
export const selectCityWeather = (state: RootState) => state.weather.city;
export const selectCityListWeather = (state: RootState) => state.weather.list;

export const selectActiveTempNotation = (state: RootState, { id = "" }) => {
  return state.weather.list.find((city) => city.id === id);
};
