import React, { useEffect, useState } from "react";
import "../css/styles.scss";
import { useWeatherData } from "../hooks/useWeatherData";

const Switch = () => {
  const { handleOnChangeUnit } = useWeatherData();

  const [selectedUnit, setSelectedUnit] = useState(false);

  const toggleSwitch = () => {
    setSelectedUnit((prevState) => !prevState);
  };

  useEffect(() => {
    const unit = selectedUnit === false ? "metric" : "imperial";
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
