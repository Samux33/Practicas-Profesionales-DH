const { VITE_API_URL } = import.meta.env;
export const getProfesiones = () => {
  return fetch(`${VITE_API_URL}/profesiones`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Error en la petición de profesiones ${res.status.Text}`
        );
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error al obtener las profesiones:", error);
      throw error;
    });
};
