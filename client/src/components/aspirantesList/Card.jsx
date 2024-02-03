import { useState } from "react";
import foto from "../../assets/foto1.jpg";

const Card = () => {
  let prueba = {
    nombre: "Gloria",
    apellido: "Medina",
    imagen: foto,
    profesión: "Administrador",
  };
  let [person] = useState(prueba);
  return (
    <article className="flex flex-col gap-2 shadow-xl h-80 p-3 md:w-1/2 xl:w-1/3 rounded">
      <div className="h-1/2 flex justify-center items-center rounded-full m-auto my-0 overflow-hidden">
        <img
          src={person.imagen}
          alt="foto del aspirante"
          className="block h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className=" font-semibold ">{`${person.nombre} ${person.apellido}`}</h2>
        <p className=" font-normal  text-gray-400">{person.profesión}</p>
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
            <a href="">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </button>
        </a>
      </nav>
    </article>
  );
};

export default Card;
