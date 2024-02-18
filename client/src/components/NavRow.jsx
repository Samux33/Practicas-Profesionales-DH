import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NavRow = ({ text, iconColor, icon, url, iconType }) => {
  return (
    <li>
      <Link to={url} className="flex items-center gap-1">
        <i className={`fa-${iconType} fa-${icon} text-${iconColor}`}></i>
        <p className="text-gray-400 font-medium"> - {text}</p>
      </Link>
    </li>
  );
};

NavRow.propTypes = {
  text: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
  iconType: PropTypes.string,
};

export default NavRow;
