import "./styles/index.scss";

import { useTheme } from "./provider/ThemeProvider";

import { AppRouter } from "./provider/router";
import { Navbar } from "widget/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};

export default App;
