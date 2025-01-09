import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { appRoutes } from "./Routes/allRoutes";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
