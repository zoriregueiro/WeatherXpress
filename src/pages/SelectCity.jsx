import React, { useRef } from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";
import Switch from "../Components/Switch";
import FavCard from "../components/FavCard";
import { MapSvg } from "../svg/Map";
import { WeatherSvg } from "../svg/weather";
import { EmptySvg } from "../svg/Empty";

const SelectCity = () => {
  const { handleOnChangeCity, error, favCities, loading } = useWeather();

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
        <div className="search-section">
          <div className="box-search-title">
            <WeatherSvg size={40} />
            <p className="search-title">Check the weather in any city</p>
          </div>
          <div>
            <div id="search-container" className="search-container">
              <input
                ref={inputRef}
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Search a city"
                className="search-input"
              />
              <button className="search-button " onClick={handleSubmit}>
                Search
              </button>
            </div>
            {error && <div className="info-text">{error}</div>}
          </div>
        </div>
        <div className="fav-container">
          <div className="box-title">
            <MapSvg />
            <p className="fav-title">Favorite places</p>
          </div>
          <div className="container-cities">
            {favCities.length === 0 && (
              <div className="empty-container">
                <EmptySvg size={28} />
                <p className="empty-text">
                  You don't have favorites at the moment, do your first search
                  to add the first one.
                </p>
              </div>
            )}
            {favCities.map((item) => (
              <FavCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SelectCity;
