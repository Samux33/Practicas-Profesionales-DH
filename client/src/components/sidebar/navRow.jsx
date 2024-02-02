import PropTypes from 'prop-types';

const NavRow = ({ text, iconColor, icon, url,iconType }) => {
  return (
    <li>
      <a href={url} className="flex items-center gap-1">
        <i className={`fa-${iconType} fa-${icon} text-${iconColor}`}></i>
        <p className="text-gray-400 font-medium"> - {text}</p>
      </a>
    </li>
  );
};

NavRow.propTypes = {
  text: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  iconType: PropTypes.string
};

export default NavRow;
