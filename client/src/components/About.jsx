import PropTypes from "prop-types";

const About = ({ title, text, img }) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-gray-400 font-medium text-3xl ">{title}</h2>
      <p className="text-gray-400 self-center text-xl font-normal text-pretty text-center px-1">
        {text}
      </p>
      <img src={img} alt="Imagen de presentación" />
    </section>
  );
};
About.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};
export default About;
