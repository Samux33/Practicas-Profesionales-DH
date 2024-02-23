import { UserCircleIcon } from "@heroicons/react/24/solid";
import InputForm from "./InputForm";
import DateInput from "./InputDate";

export default function CreateAspiranteForm() {
  return (
    <form className=" w-full flex flex-col gap-5 justify-center">
      <h2 className="text-base font-semibold leading-7 text-gray-900 self-center">
        Crea tu Perfil
      </h2>
      <div className="border-b border-gray-900/10 pb-12 w-full flex">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
          <InputForm
            type="text"
            placeholder="Ingresa tu Nombre"
            error="El nombre es requerido"
          />
          <InputForm type="text" placeholder="Ingresa tu Apellido" />
          <InputForm type="number" placeholder="Ingresa tu DNI" />
          <InputForm type="email" placeholder="Ingresa tu Email" />
          <InputForm type="number" placeholder="Ingresa tu Telefono" />
          <InputForm type="text" placeholder="Ingresa tu LinkedIn" />
          <DateInput type="date" placeholder="Fecha de Nacimiento" />
          <div className="flex items-center flex-col">
            <select
              defaultValue="Genero"
              name="genero"
              className="self-center px-3 leading-6 rounded-lg border-gray-700 bg-transparent max-w-80 w-full content-center"
            >
              <option>Genero</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
            </select>
          </div>
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