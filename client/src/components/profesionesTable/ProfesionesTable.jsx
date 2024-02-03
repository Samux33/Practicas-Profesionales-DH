const ProfesionesTable = () => {
  return (
    <section className="shadow p-4 rounded-md">
      <div className="flex flex-col gap-5">
        <h3 className=" bg-blue-600 text-white text-center block p-2 text-2xl rounded-t-md">
          Listado de Profesiones
        </h3>
        <ul className="flex flex-col items-center">
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Abogado
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Arquitecto
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Botánico
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Programador
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Economista
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Técnico de Sonido
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Profesor
          </li>
          <li className=" border-b block w-full text-center py-1 bg-white ">
            Lingüista
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ProfesionesTable;
