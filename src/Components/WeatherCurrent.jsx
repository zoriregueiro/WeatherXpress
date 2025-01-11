import React from "react";
import "../css/styles.scss";

const { VITE_ICON_WEATHER } = import.meta.env;

const WeatherCurrent = ({ data, city, unit }) => {
  console.log(data);

  const icon = data?.icon;
  const iconUrl = `${VITE_ICON_WEATHER}${icon}.png`;

  return (
    <div className="current-weather">
      {/* <h2>{weatherData.name}</h2> */}
      <img src={iconUrl} alt={data?.description} className="icon-current" />
      <p className="city-name">{city}</p>
      <p>
        {" "}
        {Math.round(data.temp)} {unit === "metric" ? "ºC" : "ºF"}
      </p>
      <p> {data.humidity}%</p>
      <p> {Math.round(data.wind)} km/h</p>
    </div>
  );
};

export default WeatherCurrent;
