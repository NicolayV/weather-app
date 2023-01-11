import { nanoid } from "@reduxjs/toolkit";
import { dateFormatter, dayMonthFormatter } from "utils/dateFormatter";
import { City, FetchCity } from "types";

export function stateAdapter(fetchData: FetchCity): City {
  const { city, country, latitude, longitude, daily, current } = fetchData;
  const { dt, weather, temp, feels_like, wind_speed, humidity, pressure } =
    current;

  return {
    id: nanoid(),
    name: city,
    country: country,
    lat: latitude.toString(),
    lon: longitude.toString(),
    dt: dateFormatter(dt * 1000),
    weather_icon: weather[0].icon,
    weather_description: weather[0].main,

    temp: temp.toFixed(),
    temp_unit: "celsius",
    feels_like: feels_like.toFixed(),

    wind: wind_speed.toFixed(),
    humidity: humidity.toString(),
    pressure: pressure.toString(),

    forecast: daily.map((day: { dt: number; temp: { day: number } }) => ({
      dt: dayMonthFormatter(day.dt * 1000),
      temp: day.temp.day.toFixed(),
    })),
  };
}
