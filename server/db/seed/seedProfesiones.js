const db = require("../models");

// Array de objetos con las profesiones
const profesiones = [
  { nombre: "Abogado" },
  { nombre: "Arquitecto" },
  { nombre: "Ingeniero" },
  { nombre: "Médico" },
  { nombre: "Profesor" },
  { nombre: "Diseñador" },
  { nombre: "Programador" },
  { nombre: "Contador" },
  { nombre: "Chef" },
  { nombre: "Periodista" },
  { nombre: "Psicólogo" },
  { nombre: "Electricista" },
  { nombre: "Carpintero" },
  { nombre: "Plomero" },
  { nombre: "Mecánico" }
];

async function seed() {
  try {
    // Eliminar datos anteriores
    await db.Profesion.destroy({ where: {} });

    // Insertar las profesiones en la tabla Profesiones
    await db.Profesion.bulkCreate(profesiones);

    console.log("Datos de las profesiones insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos de las profesiones:", error);
  }
}

seed();
