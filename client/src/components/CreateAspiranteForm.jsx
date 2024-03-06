import { UserCircleIcon } from "@heroicons/react/24/solid";
import InputForm from "./InputForm";
import DateInput from "./InputDate";
import { useState } from "react";
import { useProfesiones } from "../hooks/useProfesiones";

export default function CreateAspiranteForm() {
  const [formError, setFormError] = useState({});
  const { profesiones } = useProfesiones();
  const [profesionSeleccionada, setProfesionSeleccionada] = useState("");
  const [profesionesSeleccionadas, setProfesionesSeleccionadas] = useState([]);

  const cambiarProfesion = (event) => {
    setProfesionSeleccionada(event.target.value);
  };

  const agregarProfesion = () => {
    if (
      profesionSeleccionada.trim() !== "" &&
      profesionesSeleccionadas.indexOf(profesionSeleccionada) === -1
    ) {
      setProfesionesSeleccionadas([
        ...profesionesSeleccionadas,
        profesionSeleccionada,
      ]);
      setProfesionSeleccionada("");
    }
  };

  // enviar datos a la api
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target));
    formData.profesiones = profesionesSeleccionadas;
    console.log("estado de profesiones: ", profesionesSeleccionadas);
    console.log("data en form de profesiones: ", formData.profesiones);
    fetch("http://localhost:4000/aspirantes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((response) => {
        if (!response.success) {
          console.log(response);
          const error = response.error;
          console.log("ACA ERROR".error);
          let newErrors = {};
          error.forEach((issue) => {
            newErrors = {
              ...newErrors,
              [issue.path[0]]: issue.message,
            };
          });
          setFormError(newErrors);
        }
      })
      .catch((error) => {
        console.log("Hubo un error: ", error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full flex flex-col gap-5 justify-center"
      method="POST"
    >
      <h2 className="text-base font-semibold leading-7 text-gray-900 self-center">
        Crea un Aspirante
      </h2>
      <div className="border-b border-gray-900/10 pb-12 w-full flex flex-col gap-8">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
          <InputForm
            type="text"
            name="nombre"
            placeholder="Ingresa tu Nombre"
            error={formError.nombre}
          />
          <InputForm
            name="apellido"
            type="text"
            placeholder="Ingresa tu Apellido"
            error={formError.apellido}
          />
          <InputForm
            name="dni"
            type="number"
            placeholder="Ingresa tu DNI"
            error={formError.dni}
          />
          <InputForm
            name="email"
            type="text"
            placeholder="Ingresa tu Email"
            error={formError.email}
          />
          <InputForm
            name="telefono"
            type="number"
            placeholder="Ingresa tu Telefono"
            error={formError.telefono}
          />
          <InputForm
            name="linkedIn"
            type="text"
            placeholder="Ingresa tu LinkedIn"
            error={formError.linkedIn}
          />
          <DateInput
            name="nacimiento"
            type="date"
            placeholder="Fecha de Nacimiento"
            error={formError.nacimiento}
          />
          <div className="flex items-center flex-col">
            <select
              defaultValue="Genero"
              name="genero_id"
              className="self-center px-3 leading-6 rounded-lg border-gray-700 bg-transparent max-w-80 w-full content-center"
            >
              <option value="0">Genero</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
            </select>
            {formError.genero_id && (
              <p className="text-red-600 mt-2">{formError.genero_id}</p>
            )}
          </div>
        </div>
        <div className="self-center flex flex-col">
          <div className="self-center">
            <label htmlFor="profesion">Profesión:</label>
            <input
              type="text"
              id="profesion"
              value={profesionSeleccionada}
              onChange={cambiarProfesion}
              list="profesiones-list"
            />
            <datalist id="profesiones-list">
              {profesiones.map((profesion) => (
                <option key={profesion.id} value={profesion.nombre} />
              ))}
            </datalist>
            <button type="button" onClick={agregarProfesion}>
              Agregar
            </button>
          </div>
          <ul>
            {profesionesSeleccionadas.map((profesion, i) => (
              <li key={i}>{profesion}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 place-items-center">
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Foto
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cambiar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
