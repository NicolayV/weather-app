import React from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/search/Search";
import { Weather } from "features/weather/Weather";
import { List } from "components/list";
import { LocalCity } from "features/localCity/LocalCity";

const App = () => {
  return (
    <>
      <LangSwitcher />
      <SearchBar />
      <List>
        <LocalCity />
        <Weather />
      </List>
    </>
  );
};

export default App;
