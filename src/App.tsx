import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";

import { AboutPageLazy } from "./Pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./Pages/MainPage/MainPageLazy";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}> Главная</Link>
      <Link to={"/about"}> О нас</Link>
      <Suspense fallback={<div> Loading ... </div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
