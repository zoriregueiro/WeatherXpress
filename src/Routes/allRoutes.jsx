import { Redirect } from "react-router-dom";

// import Error404 from "@/pages/Error/Error404";

import SelectCity from "../pages/SelectCity";
import WeatherView from "../pages/WeatherView";

const appRoutes = [
  { path: "/WeatherView", element: <SelectCity /> },
  { path: "/WeatherView/:city", element: <WeatherView /> },

  //   { path: "*", component: Error404 },
];

export { appRoutes };
