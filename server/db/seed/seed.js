const db = require("../models");

let aspirantesData = [];

// Función para generar un nombre aleatorio
function generateRandomName() {
  const nombres = [
    "Juan",
    "María",
    "Pedro",
    "Ana",
    "Luis",
    "Laura",
    "Carlos",
    "Sofía",
    "Javier",
    "Isabel",
    "Diego",
    "Lucía",
    "Miguel",
    "Elena",
    "José",
    "Martín",
    "Carmen",
    "Pablo",
    "Andrea",
    "Ricardo",
  ];

  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  return nombre.toString();
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
  const prefix = namesJoined.toLowerCase().replace(/\s/g, ""); // Genera un nombre aleatorio y lo convierte en minúsculas
  const number = Math.floor(Math.random() * 100);
  return `${prefix}${number}@gmail.com`;
}

// Función para generar un teléfono aleatorio
function generateRandomPhone() {
  const prefix = "388"; // Prefijo telefónico para Jujuy, Argentina (puedes cambiarlo según tu país)
  const telefono =
    prefix +
    Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, "0"); // Genera un número aleatorio de 7 dígitos
  return telefono;
}

// Función para generar una URL de LinkedIn aleatoria
function generateRandomLinkedIn(name) {
  const url = "linkedin.com/in/";
  const nombre = name.toLowerCase().replace(/\s/g, ""); // Genera un nombre aleatorio y lo convierte en minúsculas
  return `${url}${nombre}`;
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

// Función para generar una imagen aleatoria
function generateRandomImage() {
  return "default.png";
}

for (let i = 0; i < 40; i++) {
  // Genera la información aleatoria
  const nombre = generateRandomName();
  const apellido = generateRandomLastName();
  const aspiranteAleatorio = {
    nombre: nombre,
    apellido: apellido,
    dni: generateRandomDNI(),
    email: generateRandomEmail(nombre, apellido), // Aquí pasamos nombre y apellido como parámetros
    telefono: generateRandomPhone(),
    linkedIn: generateRandomLinkedIn(nombre), // Aquí pasamos nombre como parámetro
    nacimiento: generateRandomBirthdate(),
    imagen: generateRandomImage(),
    genero_id: Math.random() < 0.5 ? 1 : 2, // Genera un género aleatorio (1 para masculino, 2 para femenino)
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
