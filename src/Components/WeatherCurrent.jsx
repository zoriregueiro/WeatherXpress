import React from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";
import { StarSvg } from "../svg/Star";

const WeatherCurrent = () => {
  const {
    formatTemperature,
    getIconUrl,
    weatherData,
    unit,
    favCities,
    handleAddCiudad,
    handleDeleteCiudad,
  } = useWeather();

  const formatWind = (wind) => {
    return `${Math.round(wind)} km/h`;
  };
  const isFav = favCities.includes(weatherData.city);

  const handleClick = () => {
    if (isFav) {
      handleDeleteCiudad(weatherData.city);
    } else {
      handleAddCiudad(weatherData.city);
    }
  };

  return (
    <div className="current-weather">
      <button className="icon-fav " onClick={handleClick}>
        <StarSvg size={25} color={isFav && "#FFD23F"} />
      </button>
      <img
        src={getIconUrl(weatherData.icon)}
        alt={weatherData?.description}
        className="icon-current"
      />
      <div className="content-container ">
        <p className="large-name ">{weatherData.city}</p>
        <p className="small-name ">{weatherData.country}</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">
          {formatTemperature(weatherData.temp, unit)}
        </p>
        <p className="small-name ">Temperature</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">{weatherData.humidity} %</p>
        <p className="small-name ">Humidity</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">{formatWind(weatherData.wind)} </p>
        <p className="small-name ">Wind speed</p>
      </div>
    </div>
  );
};

export default WeatherCurrent;
