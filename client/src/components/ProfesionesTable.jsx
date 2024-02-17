import TableRow from "./TableRow";
import { useProfesiones } from "../hooks/useProfesiones";
const ProfesionesTable = () => {
  const profesiones = useProfesiones();

  return (
    <section className="shadow p-4 rounded-md">
      <div className="flex flex-col gap-5">
        <h3 className=" bg-blue-600 text-white text-center block p-2 text-2xl rounded-t-md">
          Listado de Profesiones
        </h3>
        <ul className="flex flex-col items-center">
          {profesiones.map((name, i) => (
            <TableRow key={i} name={name} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ProfesionesTable;
