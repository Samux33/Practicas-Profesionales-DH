const {VITE_API_URL} = import.meta.env;
export const getAspirantes = () => {
  return fetch(`${VITE_API_URL}/aspirantes`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error al obtener los aspirantes:", error);
      throw error;
    });
};
