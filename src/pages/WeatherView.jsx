import React, { useState } from "react";

function WeatherView() {
  return (
    <div className="App">
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Descripción: {weatherData.weather[0].description}</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherView;
