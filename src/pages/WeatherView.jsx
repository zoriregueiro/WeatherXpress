import React, { useEffect, useRef } from "react";
import "../css/styles.scss";
import WeatherCurrent from "../Components/WeatherCurrent";
import WeatherForecast from "../Components/WeatherForecast";
import { useWeather } from "../context/WeatherContext";
import moment from "moment";
import "moment/locale/es";
import Switch from "../Components/Switch";
import { useNavigate } from "react-router-dom";

const WeatherView = () => {
  const navigate = useNavigate();
  const { weatherData, handleOnChangeCity, weatherHourly, loading, city } =
    useWeather();

  useEffect(() => {
    if (city) return;
    navigate(`/`);
  }, [window.location]);

  const isLoading = loading.forecast && loading.weather;

  const inputRef = useRef(null);

  const handleSubmit = () => {
    const searchCity = inputRef.current?.value?.trim();
    if (searchCity) {
      handleOnChangeCity(searchCity);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const currentDate = moment().format("LL");

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
        {!isLoading && weatherData && <WeatherCurrent />}
        <div className="current-hours">
          {weatherHourly.map(
            (item, index) =>
              index < 1 && <WeatherForecast data={item} index={index} />
          )}
        </div>
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
