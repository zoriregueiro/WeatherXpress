import React, { createContext, useContext } from "react";
import { useWeatherData } from "../hooks/useWeatherData";
const { VITE_ICON_WEATHER } = import.meta.env;

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const {
    weatherData,
    city,
    unit,
    weatherHourly,
    handleDeleteData,
    handleOnChangeCity,
    handleOnChangeUnit,
    handleAddCiudad,
    handleDeleteCiudad,
    favCities,
    loading,
    error,
  } = useWeatherData();

  const getIconUrl = (icon) => `${VITE_ICON_WEATHER}${icon}.png`;
  const formatTemperature = (temp, unit) => {
    return `${Math.round(temp)} ${unit === "metric" ? "ºC" : "ºF"}`;
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        city,
        unit,
        weatherHourly,
        handleDeleteData,
        handleOnChangeCity,
        handleOnChangeUnit,
        handleAddCiudad,
        handleDeleteCiudad,
        favCities,
        getIconUrl,
        formatTemperature,
        loading,
        error,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};
