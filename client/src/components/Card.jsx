const Card = (props) => {
  return (
    <article className="flex flex-col gap-2 shadow-xl h-80 p-3 w-full rounded max-w-80">
      <div className="h-1/2 flex justify-center items-center rounded-full m-auto my-0 overflow-hidden">
        <img
          src={props.imagen}
          alt="foto del aspirante"
          className="h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold ">{`${props.nombre} ${props.apellido}`}</h2>
        <p className="font-normal text-center text-gray-400">
          {props.profesión}
        </p>
      </div>
      <nav className="flex border-t justify-between pt-3 mt-3">
        <a href="">
          <button>
            <i className="fa-regular fa-star"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="fa-regular fa-comment"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="fa-regular fa-envelope"></i>
          </button>
        </a>
      </nav>
    </article>
  );
};

export default Card;
// TODO actualizar los href de los botones para que reciba de las props las url del aspirante
