import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { Suspense } from "react";
import { useTheme } from "./provider/ThemeProvider";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}> О нас</Link>
      <Suspense fallback={<div> Loading ... </div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
