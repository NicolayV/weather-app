import React, { useEffect } from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/searchBar/SearchBar";
import axios from "axios";
import { WeatherList } from "features/weather/WeatherList";

// const mapArr = dataWeather.list.map((item, idx) => {
//   return { idx: new Date(item.dt * 1000).toLocaleString() };
// });
// console.log(mapArr);

const App = () => {
  // navigator.geolocation.getCurrentPosition((position) => {
  //   console.log(position);
  // });
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    console.log(location.data);
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <LangSwitcher />
      <SearchBar />
      <WeatherList />
    </>
  );
};

export default App;
