import { FiltersContext } from "../context/filterAspirantes";
import { useProfesiones } from "../hooks/useProfesiones";
import { useId, useContext } from "react";

const SelectProfesion = () => {
  const { profesiones } = useProfesiones();
  const profesionInputId = useId();
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = (event) => {
    const selectedProfesion = event.target.value;
    setFilters({ ...filters, profesion: selectedProfesion });
  };

  return (
    <div className="flex gap-1 grow">
      <label
        htmlFor={profesionInputId}
        className="h-8 flex flex-col justify-center"
      >
        Profesión:
      </label>
      <select
        id={profesionInputId}
        className="w-40 h-8 pl-1 border border-gray-950 rounded-lg flex flex-col justify-center p-1 items-center text-center"
        onChange={handleChange}
        value={filters.profesion}
      >
        <option value="All" className="">
          Todos
        </option>
        {profesiones?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectProfesion;
