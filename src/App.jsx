import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./Routes/allRoutes";
import { LogpSvg } from "./svg/Logo";
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

export default App;
