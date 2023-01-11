import { LangSwitcher } from "features/switcher/LangSwitcher";
import { SearchBar } from "features/search/Search";
import GridShell from "components/GridShell";
import { LocalCity } from "features/localCity/LocalCity";
import { Cities } from "./features/cities/Cities";

export const App = () => (
  <>
    <LangSwitcher />
    <SearchBar />
    <GridShell>
      <LocalCity />
      <Cities />
    </GridShell>
  </>
);
