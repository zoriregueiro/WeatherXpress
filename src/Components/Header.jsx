import { useWeather } from "../context/WeatherContext";
import "../css/styles.scss";
import { LogpSvg } from "../svg/Logo";

const Header = () => {
  const { handleDeleteData } = useWeather();
  return (
    <div className="header-position" onClick={handleDeleteData}>
      <LogpSvg size={200} />
    </div>
  );
};

export default Header;
