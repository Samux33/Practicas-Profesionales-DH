const db = require("../models");

let aspirantesData = [];

// Función para generar un nombre aleatorio
function generateRandomName() {
  const nombres = [
    { name: "Juan", genero: 1 },
    { name: "María", genero: 2 },
    { name: "Pedro", genero: 1 },
    { name: "Ana", genero: 2 },
    { name: "Luis", genero: 1 },
    { name: "Laura", genero: 2 },
    { name: "Carlos", genero: 1 },
    { name: "Sofía", genero: 2 },
    { name: "Javier", genero: 1 },
    { name: "Isabel", genero: 2 },
    { name: "Diego", genero: 1 },
    { name: "Lucía", genero: 2 },
    { name: "Miguel", genero: 1 },
    { name: "Elena", genero: 2 },
    { name: "José", genero: 1 },
    { name: "Martín", genero: 1 },
    { name: "Carmen", genero: 2 },
    { name: "Pablo", genero: 1 },
    { name: "Andrea", genero: 2 },
    { name: "Ricardo", genero: 1 },
  ];
  

  const user = nombres[Math.floor(Math.random() * nombres.length)];

  return user
}

function generateRandomLastName() {
  const apellidos = [
    "Gómez",
    "Fernández",
    "López",
    "Martínez",
    "García",
    "Rodríguez",
    "Pérez",
    "Sánchez",
    "Díaz",
    "Romero",
    "Muñoz",
    "Álvarez",
    "Torres",
    "Ruiz",
    "Jiménez",
    "Gutiérrez",
    "Navarro",
    "Ortega",
    "Serrano",
    "Ramírez",
  ];

  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];

  return apellido.toString();
}

// Función para generar un DNI aleatorio
function generateRandomDNI() {
  const dni = Math.floor(Math.random() * 100000000) + 10000000; // Genera un número aleatorio de 8 dígitos
  return dni.toString(); // Convierte el número a cadena
}

// Función para generar un email aleatorio
function generateRandomEmail(nombre, apellido) {
  let namesJoined = nombre + apellido;
  const prefix = namesJoined.toLowerCase().replace(/\s/g, ""); 
  const number = Math.floor(Math.random() * 100);
  return `${prefix}${number}@gmail.com`;
}

// Función para generar un teléfono aleatorio
function generateRandomPhone() {
  const prefix = "388"; 
  const telefono =
    prefix +
    Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, "0"); // Genera un número aleatorio de 7 dígitos
  return telefono;
}

// Función para generar una URL de LinkedIn aleatoria
function generateRandomLinkedIn(nombre,apellido) {
  const url = "linkedin.com/in/";
  const user = `${nombre}-${apellido}`
  .toLowerCase().replace(/\s/g, "");
  const num=Math.floor(Math.random()*100)
  return `${url}${user}-${num}`;
}

// Función para generar una fecha de nacimiento aleatoria
function generateRandomBirthdate() {
  const year = Math.floor(Math.random() * (2005 - 1970 + 1)) + 1970; // Genera un año aleatorio entre 1970 y 2005
  const month = Math.floor(Math.random() * 12) + 1; // Genera un mes aleatorio entre 1 y 12
  const day = Math.floor(Math.random() * 28) + 1; // Genera un día aleatorio entre 1 y 28
  return `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year.toString()}`;
}

/* function generateRandomImage() {
  return "default.png";
} */

const aspirantesCantidadSeed=process.env.ASPIRANTES_CANTIDAD_SEED??40

for (let i = 0; i < aspirantesCantidadSeed; i++) {
  // Genera la información aleatoria
  const persona = generateRandomName();
  const apellido = generateRandomLastName();
  const aspiranteAleatorio = {
    nombre: persona.name,
    apellido: apellido,
    dni: generateRandomDNI(),
    email: generateRandomEmail(persona.name, apellido), // Aquí pasamos nombre y apellido como parámetros
    telefono: generateRandomPhone(),
    linkedIn: generateRandomLinkedIn(persona.name,apellido), // Aquí pasamos nombre como parámetro
    nacimiento: generateRandomBirthdate(),
    imagen: 'default.png',
    genero_id: persona.genero
  };

  aspirantesData.push(aspiranteAleatorio);
}

async function seed() {
  try {
    // Eliminar los datos ya existentes
    await db.AspiranteProfesion.destroy({ where: {} });
    await db.Aspirante.destroy({ where: {} });

    // Crear instancias de aspirantes
    const aspirantes = await db.Aspirante.bulkCreate(aspirantesData);

    // Obtener las profesiones ya existentes
    const profesiones = await db.Profesion.findAll();

    // Crear entradas en la tabla AspiranteProfesion
    const aspiranteProfesionData = aspirantes.flatMap((aspirante) => {
      const aspiranteId = aspirante.id;

      // Obtiene las profesiones de este aspirante en particular
      const profesionesIds = [];

      // Generamos aleatoriamente la cantidad de profesiones que tendrá el aspirante
      let profesionesCount = Math.floor(Math.random() * 3) + 1;

      // Agregamos la cantidad de profesiones generadas al array
      for (let j = 0; j < profesionesCount; j++) {
        profesionesIds.push(
          profesiones[Math.floor(Math.random() * profesiones.length)].id
        );
      }

      // Creamos el objeto de relación con el id del aspirante y con cada id de las profesiones
      return profesionesIds.map((profesionId) => ({
        aspirante_id: aspiranteId,
        profesion_id: profesionId,
      }));
    });

    // Se crea finalmente en la base de datos
    await db.AspiranteProfesion.bulkCreate(aspiranteProfesionData);

    console.log("Datos de los aspirantes insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos de los aspirantes:", error);
  }
}

seed();
