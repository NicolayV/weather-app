import { CityCoord } from "types";

const api_key = "77197ad688e2bf52dd11ae0d3d0fe6b5";
const api_key_custom = "439d4b804bc8187953eb36d2a8c26a02";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const BASE_URL_CUSTOM = "https://openweathermap.org/data/2.5/";

// LocalCity
export const getLocalCityNameByIp = () => "https://ipapi.co/json";
export const getLocalCityNameByCoord = (coord: CityCoord) =>
  `${BASE_URL}forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${api_key}&units=metric`;

// Search
export const getCitiesNames = (name: string) =>
  `${BASE_URL_CUSTOM}find?q=${name}&appid=${api_key_custom}&units=metric`;

// Cities list
export const getCityByCoord = (coord: CityCoord) =>
  `${BASE_URL_CUSTOM}onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${api_key_custom}`;

// GeoDB Cities
const api_key_geo = "ef3e89baf7msh9aae69027c88700p1b23b1jsn9e94a903d403";
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const geoApiOptions = {
  headers: {
    "X-RapidAPI-Key": api_key_geo,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const getAutoCompeteCityName = (name: string) =>
  `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${name}`;
