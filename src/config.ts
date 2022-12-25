const api_key = "77197ad688e2bf52dd11ae0d3d0fe6b5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

export const searchByCity = (name: string) =>
  BASE_URL + name + "&units=metric&appid=" + api_key;
