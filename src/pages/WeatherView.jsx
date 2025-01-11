import React from "react";
import "../css/styles.scss";
import WeatherCurrent from "../Components/WeatherCurrent";
import WeatherForecast from "../Components/WeatherForecast";
import { useWeather } from "../context/WeatherContext";

const WeatherView = () => {
  const {
    weatherData,
    city,
    unit,
    weatherHourly,
    handleDeleteData,
    loading,
    error,
  } = useWeather();

  const isLoading = loading.forecast && loading.weather;

  console.log(isLoading, weatherData, weatherHourly);

  return (
    <React.Fragment>
      {isLoading && "estoy cargando"}
      {!isLoading && weatherData && (
        <WeatherCurrent data={weatherData} city={city} unit={unit} />
      )}

      {weatherHourly.map((item) => (
        <WeatherForecast data={item} />
      ))}
    </React.Fragment>
  );
};

export default WeatherView;
