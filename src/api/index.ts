import { CityCoord } from "../features/localCity/types";

const api_key = "77197ad688e2bf52dd11ae0d3d0fe6b5";
const api_key_custom = "439d4b804bc8187953eb36d2a8c26a02";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const BASE_URL_CUSTOM = "https://openweathermap.org/data/2.5/";

// LocalCity
export const getLocalCityNameByCoord = (coord: CityCoord) =>
  `${BASE_URL}forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${api_key}&units=metric`;

export const getCityByCoord = (coord: CityCoord) =>
  `${BASE_URL_CUSTOM}onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${api_key_custom}`;

// Search
export const getCitiesNames = (name: string) =>
  `${BASE_URL_CUSTOM}find?q=${name}&appid=${api_key_custom}&units=metric`;
