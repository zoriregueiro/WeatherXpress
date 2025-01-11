import "../css/styles.scss";
import { LogpSvg } from "../svg/Logo";
import Switch from "./Switch";

const Header = () => {
  return (
    <div className="header-position">
      <LogpSvg size={200} />
      <Switch />
    </div>
  );
};

export default Header;
