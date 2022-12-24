const api_key = "77197ad688e2bf52dd11ae0d3d0fe6b5";

// const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${api_key}`;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

// ${city_name}&appid=${api_key}

export const searchByCountry = (name: string) =>
  BASE_URL + name + "&appid=" + api_key;
