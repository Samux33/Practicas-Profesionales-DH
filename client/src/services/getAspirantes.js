const { VITE_API_URL } = import.meta.env;
export const getAspirantes = ({ search }) => {
  console.log('getAspirantes creado')
  return fetch(`${VITE_API_URL}/aspirantes?name=${search}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error("Error al obtener los aspirantes:", error);
      throw error;
    });
};
