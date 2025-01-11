import React, { useState } from "react";
import "../css/styles.scss";
import { useWeatherData } from "../hooks/useWeatherData";

const SelectCity = () => {
  const { handleOnChangeCity, error } = useWeatherData();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    handleOnChangeCity(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="search-window">
      <div id="search-container" className="search-container ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Escribe una ciudad"
          className="search-input"
        />
        <button onClick={handleSubmit}>Buscar</button>
      </div>

      {error && <div className="info-text">{error}</div>}
    </div>
  );
};

export default SelectCity;
