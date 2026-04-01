import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { buildRouterConfig } from "../config/buildRoutes";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div> Loading ... </div>}>
      <Routes>
        {Object.values(buildRouterConfig).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
