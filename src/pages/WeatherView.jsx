import React, { useRef } from "react";
import "../css/styles.scss";
import WeatherCurrent from "../Components/WeatherCurrent";
import WeatherForecast from "../Components/WeatherForecast";
import { useWeather } from "../context/WeatherContext";
import moment from "moment";
import "moment/locale/es";
import Switch from "../Components/Switch";

const WeatherView = () => {
  moment.locale("es");
  const { weatherData, handleOnChangeCity, weatherHourly, loading } =
    useWeather();

  const isLoading = loading.forecast && loading.weather;

  const inputRef = useRef(null);

  const handleSubmit = () => {
    const city = inputRef.current?.value?.trim();
    if (city) {
      handleOnChangeCity(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const currentDate = moment().format("LL");
  console.log(currentDate);

  return (
    <React.Fragment>
      <div className="container-input">
        <p className="date-text ">{currentDate}</p>
        <div className="container-swtich">
          <input
            ref={inputRef}
            type="text"
            onKeyPress={handleKeyPress}
            placeholder="Search a city"
            className="input-research"
          />
          <Switch />
        </div>
      </div>
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
