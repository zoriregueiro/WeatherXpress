import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./Routes/allRoutes";
import Header from "./Components/Header";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Fragment>
  );
}

const AppWrapper = () => {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
};
export default AppWrapper;
