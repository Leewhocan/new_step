import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { Suspense } from "react";
import { useTheme } from "./provider/ThemeProvider";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";
import { AppRouter } from "./provider/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}> О нас</Link>
      <AppRouter />
    </div>
  );
};

export default App;
