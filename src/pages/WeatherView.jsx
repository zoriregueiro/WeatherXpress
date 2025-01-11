import React from "react";
import "../css/styles.scss";
import WeatherCurrent from "../Components/WeatherCurrent";
import WeatherForecast from "../Components/WeatherForecast";
import { useWeather } from "../context/WeatherContext";

const WeatherView = () => {
  const { weatherData, weatherHourly, loading } = useWeather();

  const isLoading = loading.forecast && loading.weather;

  console.log(isLoading, weatherData, weatherHourly);

  return (
    <React.Fragment>
      <div className="container-current">
        {isLoading && "estoy cargando"}
        {!isLoading && weatherData && <WeatherCurrent />}
        {weatherHourly.map(
          (item, index) =>
            index < 1 && <WeatherForecast data={item} index={index} />
        )}
      </div>
      <div className="container-forecast">
        {weatherHourly.map(
          (item, index) =>
            index > 0 && <WeatherForecast data={item} index={index} />
        )}
      </div>
    </React.Fragment>
  );
};

export default WeatherView;
