import React, { useState } from "react";
import { LangSwitcher } from "features/switcher/LangSwitcher";
import { SearchBar } from "features/search/Search";
import { List } from "components/List";
import { LocalCity } from "features/localCity/LocalCity";
import { Cities } from "./features/cities/Cities";

const App = () => {
  // const [value, setValue] = useState("geolocation");
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     setValue("Geolocation is not supported by this browser.");
  //   }
  // }

  // function showPosition(position: any) {
  //   setValue(
  //     "Latitude: " +
  //       position.coords.latitude +
  //       "Longitude: " +
  //       position.coords.longitude
  //   );
  // }

  return (
    <>
      {/* <div>
        <button onClick={() => getLocation()}>Geo</button>
        <p>{value}</p>
      </div> */}
      <LangSwitcher />
      <SearchBar />
      <List>
        <LocalCity />
        <Cities />
      </List>
    </>
  );
};

export default App;
