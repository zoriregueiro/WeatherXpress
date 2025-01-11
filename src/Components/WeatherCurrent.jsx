import React from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";

const WeatherCurrent = () => {
  const { formatTemperature, getIconUrl, weatherData, unit } = useWeather();

  const formatWind = (wind) => {
    return `${Math.round(wind)} km/h`;
  };

  return (
    <div className="current-weather">
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
        <p className="small-name ">Temperatura</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">{weatherData.humidity} %</p>
        <p className="small-name ">Humedad</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">{weatherData.humidity} %</p>
        <p className="small-name ">Humedad</p>
      </div>
      <div className="content-container ">
        <p className="large-name ">{formatWind(weatherData.wind)} </p>
        <p className="small-name ">Viento</p>
      </div>
    </div>
  );
};

export default WeatherCurrent;
