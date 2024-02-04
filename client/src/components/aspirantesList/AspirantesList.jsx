import Card from "./Card";
import { useState, useEffect } from "react";
//import { getAspirantes } from "../../services/getAspirantes";

const AspirantesList = () => {
  let [aspirantes, setAspirantes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/aspirantes`)
      .then((res) => res.json())
      .then((data) => setAspirantes(data))
      .catch((error) => {
        console.error("Error al obtener los aspirantes:", error);
        throw error;
      });
    /*     getAspirantes().then((res) => {
      setAspirantes(res.data);
    }); */
  }, []);
  return (
    <section>
      {aspirantes.map((person) => (
        <Card
          key={person.id}
          nombre={person.nombre}
          apellido={person.apellido}
          imagen={person.imagen}
          profesión={person.profesiones.join(", ")}
        />
      ))}
    </section>
  );
};
export default AspirantesList;
