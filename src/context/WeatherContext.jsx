import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWeatherData } from "../hooks/useWeatherData";

const WeatherContext = createContext(null);

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const history = useHistory();
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
      value={{ city, weatherData, error, handleDeleteData, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};
