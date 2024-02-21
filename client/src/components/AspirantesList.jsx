import Card from "./Card";
import { useAspirantes } from "../hooks/useAspirantes";
import { useContext } from "react";
import { SearchContext } from "../context/searchAspirantes";

const AspirantesList = () => {
  const { search } = useContext(SearchContext);
  const { aspirantes, error } = useAspirantes({ search });
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] w-full gap-4 place-items-center">
      {error ? (
        <h2>{error}</h2>
      ) : (
        aspirantes.map((person) => (
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
