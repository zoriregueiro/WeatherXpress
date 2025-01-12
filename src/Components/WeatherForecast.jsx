import React from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";
import moment from "moment";

const WeatherForecast = ({ data, index }) => {
  const { formatTemperature, getIconUrl, unit } = useWeather();

  const formatHour = (hour) => moment(hour * 1000).format("HH:mm");

  const formatDate = (date) => moment(date).format("dddd");

  return (
    <div className={index < 1 ? "container-date" : "container-date-2"}>
      {index > 0 && formatDate(data.date)}
      {data?.items?.map((item) => (
        <div className="container-next-hours">
          <img
            src={getIconUrl(item.weather[0].icon)}
            alt={item.weather[0].description}
            className="icon-current"
          />
          <div className="content-container ">
            <p className="large-name ">
              {formatTemperature(item.main.temp, unit)}
            </p>
          </div>
          <div className="content-container ">
            <p className="large-name ">{formatHour(item.dt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
