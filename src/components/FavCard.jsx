import React from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";

const FavCard = ({ item }) => {
  const { handleOnChangeCity } = useWeather();

  const handleOnClick = () => {
    handleOnChangeCity(item);
  };
  return (
    <div className="fav-card " onClick={handleOnClick}>
      <p>{item}</p>
    </div>
  );
};

export default FavCard;
