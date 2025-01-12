import React, { useRef } from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";
import Switch from "../Components/Switch";

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
    <React.Fragment>
      <Switch />

      <div className="search-window">
        <p className="search-title">Check the weather in any city</p>
        <div>
          <div id="search-container" className="search-container">
            <input
              ref={inputRef}
              type="text"
              onKeyPress={handleKeyPress}
              placeholder="Search a city"
              className="search-input"
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
          {error && <div className="info-text">{error}</div>}
        </div>
      </div>
    </React.Fragment>
  );
};
export default SelectCity;
