import React from "react";
import "../css/styles.scss";
import WeatherForecast from "../Components/WeatherForecast";
import WeatherCurrent from "../Components/WeatherCurrent";
import { useWeatherData } from "../hooks/useWeatherData";

const WeatherView = () => {
  const {
    weatherData,
    city,
    unit,
    weatherHourly,
    handleDeleteData,
    loading,
    error,
  } = useWeatherData();

  const isLoading = loading.forecast && loading.weather;

  console.log(isLoading, weatherData, weatherHourly);

  return (
    <React.Fragment>
      {isLoading && "estoy cargando"}
      {!isLoading && weatherData && (
        <WeatherCurrent data={weatherData} city={city} unit={unit} />
      )}

      {weatherHourly &&
        weatherHourly.map((item) => <WeatherForecast data={item} />)}
    </React.Fragment>
  );
};

export default WeatherView;
