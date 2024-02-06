import propTypes from "prop-types";

const Title = ({ text }) => {
  return <h2 className="text-gray-400 font-semibold block text-4xl">{text}</h2>;
};

Title.propTypes = {
  text: propTypes.string,
};

export default Title;
