import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";

import { AboutPageLazy } from "./Pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./Pages/MainPage/MainPageLazy";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
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
