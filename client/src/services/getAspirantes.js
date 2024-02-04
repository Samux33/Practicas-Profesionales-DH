const { API_URL } = import.meta.env;

export const getAspirantes = () => {
  return fetch(`${API_URL}/aspirantes`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error en la petición: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error al obtener los aspirantes:", error);
      throw error;
    });
};
