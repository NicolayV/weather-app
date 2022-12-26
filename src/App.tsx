import React from "react";
import { LangSwitcher } from "features/langSwitcher/LangSwitcher";
import { SearchBar } from "features/search/Search";
import { List } from "components/list";
import { LocalCity } from "features/localCity/LocalCity";
import { Cities } from "./features/cities/Cities";

const App = () => {
  return (
    <>
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
