import Card from "./Card";
import { useAspirantes } from "../hooks/useAspirantes";

const AspirantesList = () => {
  const aspirantes = useAspirantes();
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] w-full gap-4 place-items-center">
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
