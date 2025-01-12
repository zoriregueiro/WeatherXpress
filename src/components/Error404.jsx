// src/components/NotFound.js

import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: rgb(49, 49, 49),
        color: "#ecf0f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}>
      <h1 style={{ fontSize: "72px", margin: "0" }}>404</h1>
      <p style={{ fontSize: "24px", margin: "10px 0" }}>
        La página que estás buscando no existe.
      </p>
      <Link
        to="/"
        style={{
          fontSize: "18px",
          color: "#3498db",
          textDecoration: "none",
          padding: "10px 20px",
          backgroundColor: "#ecf0f1",
          borderRadius: "5px",
        }}>
        Volver a la página principal
      </Link>
    </div>
  );
};

export default Error404;
