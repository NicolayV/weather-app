import { LoadCityProps } from "types";

const api_key = "77197ad688e2bf52dd11ae0d3d0fe6b5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export const searchByCity = (name: string) =>
  BASE_URL + name + "&units=metric&appid=" + api_key;

export const getCityNameByLocation = () => "https://ipapi.co/json";

export const getCityByName = (name: string) =>
  `https://openweathermap.org/data/2.5/find?q=${name}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;

export const getCityByCoord = (coord: LoadCityProps) =>
  `https://openweathermap.org/data/2.5/onecall?lat=${coord.strLat}&lon=${coord.strLon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`;
