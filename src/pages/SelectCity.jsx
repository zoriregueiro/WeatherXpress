import React, { useState } from "react";

import { useWeather } from "../context/WeatherContext";

function SelectCity() {
  const { handleOnChangeCity, city, error } = useWeather();

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
        // onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Escribe una ciudad"
      />
      <button onClick={handleOnChangeCity}>Buscar</button>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SelectCity;
