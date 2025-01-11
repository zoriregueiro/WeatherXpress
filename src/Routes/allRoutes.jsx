// import Error404 from "@/pages/Error/Error404";

import SelectCity from "../pages/SelectCity";
import WeatherView from "../pages/WeatherView";

const appRoutes = [
  { path: "/", element: <SelectCity /> },
  { path: "/weather-view", element: <WeatherView /> },

  //   { path: "*", component: Error404 },
];

export { appRoutes };
