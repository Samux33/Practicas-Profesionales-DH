import PropTypes from 'prop-types';

const Info=({title,text,img})=>{
  return(
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={img} alt="Imagen de presentación" />
    </section>
  )
}
Info.propTypes={
  title:PropTypes.string,
  text:PropTypes.string,
  img:PropTypes.string
}
export default Info