// import Error404 from "@/pages/Error/Error404";

import Error404 from "../components/Error404";
import SelectCity from "../pages/SelectCity";
import WeatherView from "../pages/WeatherView";

const appRoutes = [
  { path: "/", element: <SelectCity /> },
  { path: "/weather-view/:location", element: <WeatherView /> },

  { path: "*", element: <Error404 /> },
];

export { appRoutes };
