import { CityCoord } from "types";

const api_key = "439d4b804bc8187953eb36d2a8c26a02";
const BASE_URL = "https://openweathermap.org/data/2.5/";

// LocalCity
export const getLocalCityNameByIp = () => "https://ipapi.co/json";
// Search
export const getCitiesNames = (name: string) =>
  `${BASE_URL}find?q=${name}&appid=${api_key}&units=metric`;
// Cities list
export const getCityByCoord = (coord: CityCoord) =>
  `${BASE_URL}onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${api_key}`;
