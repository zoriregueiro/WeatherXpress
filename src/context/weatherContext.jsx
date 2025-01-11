// #region IMPORTS
import React, { createContext, useContext } from "react";
import { useWeatherData } from "../hooks/useWeatherData";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
  const {
    weatherData,
    city,
    unit,
    weatherHourly,
    handleDeleteData,
    handleOnChangeCity,
    handleOnChangeUnit,
    loading,
    error,
  } = useWeatherData();

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
        loading,
        error,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
