import { RootState } from "store";

export const selectCitiesWeather = (state: RootState) => state.weather;
