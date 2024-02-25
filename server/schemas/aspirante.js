const z = require("zod");
const db = require('../db/models')

const getProfesiones=async()=>{
  const result =await db.Profesion.findAll()
  return result
}

const profesiones=getProfesiones()

const aspiranteSchema = z.object({
  nombre: z.string(),
  apellido: z.string(),
  dni: z.string().length(8),
  email: z.string().email(),
  telefono: z.string().min(7).max(15),
  linkedIn: z.string().url(),
  nacimiento: z.date(),
  genero_id: z.number().min(1).max(2),
  imagen: z.string().endsWith(".png"),
  profesiones:z.array(z.enum(profesiones))
});

function validateAspirante (aspirante){
  return aspiranteSchema.safeParse(aspirante)
}

module.exports=validateAspirante