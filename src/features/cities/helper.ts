import { nanoid } from "@reduxjs/toolkit";
import { City, FetchCity } from "types";

export function stateAdapter(
  fetchData: Omit<FetchCity, "name" | "country"> & {
    lat: string;
    lon: string;
  }
): Omit<City, "name" | "country"> {
  const { lat, lon, daily, current } = fetchData;
  const { dt, weather, temp, feels_like, wind_speed, humidity, pressure } =
    current;

  return {
    id: nanoid(),
    //   name: city,
    //   country: country,
    lat: lat.toString(),
    lon: lon.toString(),

    dt: (dt * 1000).toString(),
    weather_icon: weather[0].icon,
    weather_description: weather[0].main,

    temp: temp.toFixed(),
    temp_unit: "celsius",
    feels_like: feels_like.toFixed(),

    wind: wind_speed.toFixed(),
    humidity: humidity.toString(),
    pressure: pressure.toString(),

    forecast: daily.map((day: { dt: number; temp: { day: number } }) => ({
      dt: (day.dt * 1000).toString(),
      temp: day.temp.day.toFixed(),
    })),
  };
}
