import { useContext } from "react";
import { FiltersContext } from "../context/filterAspirantes";

export function useFilters() {
  const { filters } = useContext(FiltersContext);

  const filterAspirantes = (aspirantes) => {
    return aspirantes.filter((aspirante) => {
      return (
        aspirante.profesiones.includes(filters.profesion) ||
        filters.profesion == "All"
      );
    });
  };
  return { filterAspirantes };
}
