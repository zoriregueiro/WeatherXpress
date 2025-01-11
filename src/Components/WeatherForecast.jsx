import React from "react";

const WeatherForecast = ({ data }) => {
  console.log(data);
  return (
    <div className="weather">
      {/* <h2>{weatherData.name}</h2> */}
      <p> {Math.round(data.temp)} °C</p>
      <p> {Math.round(data.wind)} km/h</p>
      <p>{data.hour}</p>
    </div>
  );
};

export default WeatherForecast;
