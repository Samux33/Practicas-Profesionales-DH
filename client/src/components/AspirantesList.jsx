import Card from "./Card";
import { useAspirantes } from "../hooks/useAspirantes";

const AspirantesList = () => {
  const aspirantes = useAspirantes();
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
