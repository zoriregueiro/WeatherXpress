import React, { useRef } from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";

const SelectCity = () => {
  const { handleOnChangeCity, error } = useWeather();

  const inputRef = useRef(null);

  const handleSubmit = () => {
    const city = inputRef.current?.value?.trim();
    if (city) {
      handleOnChangeCity(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="search-window">
      <p className="search-title">Consulta el tiempo en cualquier ciudad</p>
      <div>
        <div id="search-container" className="search-container">
          <input
            ref={inputRef}
            type="text"
            onKeyPress={handleKeyPress}
            placeholder="Escribe una ciudad"
            className="search-input"
          />
          <button onClick={handleSubmit}>Buscar</button>
        </div>
        {error && <div className="info-text">{error}</div>}
      </div>
    </div>
  );
};
export default SelectCity;
