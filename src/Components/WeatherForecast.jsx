import React from "react";

const WeatherForecast = ({ data }) => {
  console.log(data);
  return (
    <div className="weather">
      {/* <h2>{weatherData.name}</h2> */}
      <p> {Math.trunc(data.temp)} °C</p>
      <p> {Math.trunc(data.wind)} km/h</p>
      <p>{data.hour}</p>
    </div>
  );
};

export default WeatherForecast;
