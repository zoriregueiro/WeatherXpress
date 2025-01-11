import React from "react";
import "../css/styles.scss";

const WeatherCurrent = ({ data, city, unit }) => {
  console.log(data);
  const icon = data?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  return (
    <div className="current-weather">
      {/* <h2>{weatherData.name}</h2> */}
      <img src={iconUrl} alt={data?.description} className="icon-current" />
      <p className="city-name">{city}</p>
      <p>
        {" "}
        {Math.trunc(data.temp)} {unit === "metric" ? "ºC" : "ºF"}
      </p>
      <p> {data.humidity}%</p>
      <p> {Math.trunc(data.wind)} km/h</p>
    </div>
  );
};

export default WeatherCurrent;
