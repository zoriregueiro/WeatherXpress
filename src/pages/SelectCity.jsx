import React, { useState } from "react";

import { useWeather } from "../context/WeatherContext";

function SelectCity() {
  const { fetchWeather, city } = useWeather();

  const apiKey = "3d352759f46a079edccbcdf0faa63d3f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="App">
      <h1>Consulta el clima</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Escribe una ciudad"
      />
      <button onClick={fetchWeather}>Buscar</button>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SelectCity;
