import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./Routes/allRoutes";
import { WeatherProvider } from "./context/WeatherContext";
import Header from "./Components/Header";

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
