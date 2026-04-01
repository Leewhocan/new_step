import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RoutePath } from "shared/config";

export const buildRouterConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
