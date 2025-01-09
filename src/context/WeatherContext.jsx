import { createContext, useContext, useEffect, useState } from "react";
import { useWeatherData } from "../hooks/useWeatherData";

const WeatherContext = createContext(null);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const {
    weatherData,
    city,
    handleDeleteData,
    handleOnChangeCity,
    loading,
    error,
  } = useWeatherData();

  return (
    <WeatherContext.Provider
      value={{
        city,
        weatherData,
        error,
        handleDeleteData,
        handleOnChangeCity,
        loading,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};
