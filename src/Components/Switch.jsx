import React, { useEffect, useState } from "react";
import "../css/styles.scss";
import { useWeather } from "../context/WeatherContext";

const Switch = () => {
  const { handleOnChangeUnit } = useWeather();

  const [selectedUnit, setSelectedUnit] = useState(false);

  const toggleSwitch = () => {
    setSelectedUnit((prevState) => !prevState);
  };

  useEffect(() => {
    const unit = selectedUnit ? "imperial" : "metric";
    handleOnChangeUnit(unit);
  }, [selectedUnit]);

  return (
    <div className="switch-position">
      <label htmlFor="switch" className="label-switch">
        <span className="switch-text">ºC</span>
        <div className="switch-back">
          <input
            id="switch"
            type="checkbox"
            checked={selectedUnit}
            onChange={toggleSwitch}
            className="input-witch "
          />
          <span
            style={{
              left: selectedUnit ? "30px" : "3px",
            }}
            className="span-switch "
          />
        </div>
        <span className="switch-text ">ºF</span>
      </label>
    </div>
  );
};

export default Switch;
