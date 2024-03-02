const z = require("zod");
const db = require("../db/models");

const getProfesiones = async () => {
  const result = await db.Profesion.findAll();
  return result;
};

const profesiones = getProfesiones();

const aspiranteSchema = z
  .object({
    nombre: z.string().min(3, {
      message: "Tu nombre debe ser de al menos 3 caracteres",
    }),
    apellido: z
      .string()
      .min(3, { message: "Tu apellido debe ser de al menos 3 caracteres" }),
    dni: z.string().length(8, {
      message: "El dni debe ser de 8 caracteres",
    }),
    email: z.string().email({ message: "Debes ingresar un email valido" }),
    telefono: z
      .string()
      .min(7, { message: "Tu telefono debe ser de al menos 7 caracteres" })
      .max(15, { message: "Tu telefono debe ser de máximo 15 caracteres" }),
    linkedIn: z.string().url({ message: "Debes ingresar una url valida" }),
    nacimiento: z.date({
      invalid_type_error: "Debes ingresar una fecha valida",
    }),
    genero_id: z.nativeEnum(["1", "2"], {
      errorMap: (issue, ctx) => {
        return { message: "Debes elegir uno de los generos" };
      },
    }),
    imagen: z
      .string()
      .endsWith(".png", { message: "Debes subir una imagen tipo png" }),
    profesiones: z.array(z.enum(profesiones)),
  })
  .required();

function validateAspirante(aspirante) {
  return aspiranteSchema.safeParse(aspirante);
}

module.exports = validateAspirante;
