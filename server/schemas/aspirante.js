const z = require("zod");

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
});
