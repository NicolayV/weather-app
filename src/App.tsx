import { LanguageSwitcher } from "features/languageSwitcher";

const App = () => {
  const dateInMs = 1642664853302;
  const date = new Date(dateInMs);
  console.log(date.toString());

  return (
    <>
      <LanguageSwitcher />
      <div>Content</div>
    </>
  );
};

export default App;
