import Card from "./Card";
import { useAspirantes } from "../hooks/useAspirantes";
import { useFilters } from "../hooks/useFilters";

const AspirantesList = () => {
  const { aspirantes, error } = useAspirantes();
  const { filterAspirantes } = useFilters({ aspirantes });
  const newAspirantes = filterAspirantes(aspirantes);
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] w-full gap-4 place-items-center">
      {error ? (
        <h2>{error}</h2>
      ) : (
        newAspirantes?.map((person) => (
          <Card
            key={person.id}
            nombre={person.nombre}
            apellido={person.apellido}
            imagen={person.imagen}
            profesión={person.profesiones.join(", ")}
          />
        ))
      )}
    </section>
  );
};
export default AspirantesList;
